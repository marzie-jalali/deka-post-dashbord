import { NavLink } from "react-router-dom";
import Dashboard from "../../screens/Dashboard";
import Todos from "../../screens/Todos";
import Weather from "../../screens/Weather";
import { pathes } from "../../routing/pathes";
import path from "path";
import Profile from "../../screens/Profile";

const Sidebar = () => {
  return (
    <aside className="w-16 md:w-32 lg:w-48 border">
      <nav className="flex flex-col gap-2">
        <NavLink
          to={pathes.dashboard}
          className={({ isActive }) =>
            `flex items-center gap-2 p-4 rounded-md hover:bg-accent ${
              isActive ? "bg-slate-300" : ""
            }`
          }
        >
          <Dashboard />
        </NavLink>
        <NavLink
          to={pathes.todos}
          className={({ isActive }) =>
            `flex items-center gap-2 p-4 hover:bg-slate-200 ${
              isActive ? "bg-slate-300" : ""
            }`
          }
        >
          <Todos />{" "}
        </NavLink>
        <NavLink
          to={pathes.weather}
          className={({ isActive }) =>
            `flex items-center gap-2 p-4 rounded-md hover:bg-slate-200 ${
              isActive ? "bg-slate-300" : ""
            }`
          }
        >
          <Weather />
        </NavLink>
        <NavLink
          to={pathes.profile}
          className={({ isActive }) =>
            `flex items-center gap-2 p-4 rounded-md hover:bg-slate-200 ${
              isActive ? "bg-slate-300" : ""
            }`
          }
        >
          <Profile />
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
