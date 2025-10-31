import { create } from "zustand";

interface Todo {
  id: number;
  text: string;
}

interface TodosStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, newText: string) => void;
}

const useTodosStore = create<TodosStore>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: state.todos.length + 1, text }],
    })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  updateTodo: (id, newText) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
    })),
}));

export default useTodosStore;
