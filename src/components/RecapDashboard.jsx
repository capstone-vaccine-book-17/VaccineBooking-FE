import React from "react";
import RecapCard from "./RecapCard";

const RecapDashboard = ({ title }) => {
  return (
    <div className="flex flex-col gap-8 p-6 mb-8 justify-between bg-white drop-shadow-md rounded-md">
      <h1 className="text-[32px] font-semibold">{title}</h1>
      <div className="w-full flex justify-between">
        <RecapCard title="Kuota vaksin tersedia" amount="10.000" />
        <RecapCard title="Booking hari ini" amount="300" />
        <RecapCard title="Total pendaftar vaksin" amount="500.000" />
      </div>
    </div>
  );
};

export default RecapDashboard;
