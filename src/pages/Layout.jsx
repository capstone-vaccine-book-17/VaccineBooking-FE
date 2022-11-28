import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Layout = () => {
  return (
    <>
      <main className="flex h-screen">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Topbar />
          <div className="overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
