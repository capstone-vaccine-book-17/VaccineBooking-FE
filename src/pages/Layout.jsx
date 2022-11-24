import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Layout = () => {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Topbar />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
