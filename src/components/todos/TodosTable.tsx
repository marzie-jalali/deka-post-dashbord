import { Card, CardContent } from "../ui/card";
import useTodosStore from "../../store/todosStore";
import { FaPlusSquare } from "react-icons/fa";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import Button from "../ui/button";
import { useNavigate } from "react-router-dom";
import { pathes } from "../../routing/pathes";
import { useTranslation } from "react-i18next";

const TodosTable = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { todos, removeTodo } = useTodosStore();
  return (
    <div className="max-w-xl items-center justify-center mx-auto">
      <Card className="border border-border shadow-sm">
        <CardContent className="p-2">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="border-b px-4 py-2 text-left">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigate(pathes.todosForm)}
                  >
                    <FaPlusSquare size={25} />
                  </Button>
                </th>
                <th className="border-b px-4 py-2 text-left">
                  {t("todos.text")}
                </th>
                <th className="border-b px-4 py-2 text-left">
                  {t("todos.actions")}
                </th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr className="hover:bg-accent/20" key={index}>
                  <td className="border-b px-4 py-2">{todo.id}</td>
                  <td className="border-b px-4 py-2">{todo.text}</td>
                  <td className="border-b px-4 py-2 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeTodo(todo.id)}
                    >
                      <IoMdRemoveCircleOutline size={24} />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        navigate(
                          pathes.todosEdit.replace(":id", todo.id.toString())
                        )
                      }
                    >
                      <MdEdit size={24} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodosTable;
