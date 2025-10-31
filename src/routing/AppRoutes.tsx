import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pathes } from "./pathes";
import Weather from "../screens/Weather";
import Profile from "../screens/Profile";
import Todos from "../screens/todos/Todos";
import Dashboard from "../screens/Dashboard";
import Layout from "../components/layout/Layout";
import TodosForm from "../screens/todos/TodosForm";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path={pathes.todos} element={<Todos />} />
          <Route path={pathes.todosForm} element={<TodosForm />} />
          <Route path={pathes.todosEdit} element={<TodosForm />} />
          <Route path={pathes.weather} element={<Weather />} />
          <Route path={pathes.profile} element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
