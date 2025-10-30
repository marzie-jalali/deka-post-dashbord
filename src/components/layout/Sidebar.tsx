import { NavLink } from "react-router-dom";
import { pathes } from "../../routing/pathes";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
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
          {t("sidebar.dashboard")}
        </NavLink>
        <NavLink
          to={pathes.todos}
          className={({ isActive }) =>
            `flex items-center gap-2 p-4 hover:bg-slate-200 ${
              isActive ? "bg-slate-300" : ""
            }`
          }
        >
          {t("sidebar.todos")}
        </NavLink>
        <NavLink
          to={pathes.weather}
          className={({ isActive }) =>
            `flex items-center gap-2 p-4 rounded-md hover:bg-slate-200 ${
              isActive ? "bg-slate-300" : ""
            }`
          }
        >
          {t("sidebar.weather")}
        </NavLink>
        <NavLink
          to={pathes.profile}
          className={({ isActive }) =>
            `flex items-center gap-2 p-4 rounded-md hover:bg-slate-200 ${
              isActive ? "bg-slate-300" : ""
            }`
          }
        >
          {t("sidebar.profile")}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
