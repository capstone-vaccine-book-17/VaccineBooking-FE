import React from "react";
import Notify from "../assets/notify.png";

const Topbar = () => {
  return (
    <div className="w-full">
      <nav className="flex justify-between items-center px-8 py-8 bg-[#ffffff]">
        <div>
          <h1 className="text-2xl">Welcome</h1>
        </div>
        <div className="flex items-center gap-12">
          <img className="w-8 h-8" src={Notify} alt="icon" />
          <div className="w-14 h-14 rounded-full bg-blue-700"></div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
