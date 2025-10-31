import Sidebar from "./Sidebar";
import Headr from "./Headr";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-background m-2">
      <div className="flex flex-col ">
        {" "}
        <Headr />
      </div>

      <div className="flex flex-1 ">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 border border-border">
          <div className="bg-card p-6 min-h-[calc(100vh-8rem)]">
            {" "}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
