import { pathes } from "../../routing/pathes";
import Button from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import useTodosStore from "../../store/todosStore";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const TodosForm = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { todos, addTodo, updateTodo } = useTodosStore();
  const [text, setText] = useState("");
  const isEdit = Boolean(id);
  const existingTodo = isEdit
    ? todos.find((todo) => todo.id === parseInt(id ?? "0")) ?? null
    : null;

  useEffect(() => {
    if (existingTodo) {
      setText(existingTodo.text);
    }
  }, [existingTodo]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (id) {
      updateTodo(parseInt(id), text);
    } else {
      addTodo(text);
    }
    setText("");
    navigate(pathes.todos);
  };

  return (
    <Card className="max-w-xs items-center justify-center mx-auto">
      <CardHeader>
        <CardTitle>
          <h2>{id ? t("todos.editTodo") : t("todos.createTodo")}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 max-w-xs items-center justify-center"
        >
          <Input
            type="text"
            placeholder={t("todos.text")}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div>
            {" "}
            <Button type="submit">
              {id ? t("todos.editTodo") : t("todos.createTodo")}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TodosForm;
