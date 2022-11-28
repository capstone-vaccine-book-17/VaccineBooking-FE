import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const TopSection = ({ title }) => {
  return (
    <div className="flex flex-col gap-4 p-6 mb-8 justify-between bg-white drop-shadow-md rounded-md">
      <h1 className="text-[32px] font-semibold">{title}</h1>
      <Breadcrumbs />
    </div>
  );
};

export default TopSection;
