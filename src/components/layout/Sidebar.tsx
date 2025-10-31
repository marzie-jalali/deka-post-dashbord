import { NavLink } from "react-router-dom";
import { pathes } from "../../routing/pathes";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <aside className="w-16 md:w-32 lg:w-48 border border-border bg-card">
      <nav className="flex flex-col gap-2 p-2">
        <NavLink
          to={pathes.dashboard}
          className={({ isActive }) =>
            `flex items-center gap-2 p-4 rounded-md hover:bg-accent text-card-foreground hover:text-accent-foreground transition-colors ${
              isActive ? "bg-accent text-accent-foreground" : ""
            }`
          }
        >
          {t("sidebar.dashboard")}
        </NavLink>
        <NavLink
          to={pathes.todos}
          className={({ isActive }) =>
            `flex items-center gap-2 p-4 rounded-md hover:bg-accent text-card-foreground hover:text-accent-foreground transition-colors ${
              isActive ? "bg-accent text-accent-foreground" : ""
            }`
          }
        >
          {t("sidebar.todos")}
        </NavLink>
        <NavLink
          to={pathes.weather}
          className={({ isActive }) =>
            `flex items-center gap-2 p-4 rounded-md hover:bg-accent text-card-foreground hover:text-accent-foreground transition-colors ${
              isActive ? "bg-accent text-accent-foreground" : ""
            }`
          }
        >
          {t("sidebar.weather")}
        </NavLink>
        <NavLink
          to={pathes.profile}
          className={({ isActive }) =>
            `flex items-center gap-2 p-4 rounded-md hover:bg-accent text-card-foreground hover:text-accent-foreground transition-colors ${
              isActive ? "bg-accent text-accent-foreground" : ""
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
