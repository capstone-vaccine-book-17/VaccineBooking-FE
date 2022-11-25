import React from "react";

const RecapCard = ({ title, amount, percent }) => {
  return (
    <div className="w-[420px] p-4 flex flex-col gap-3 bg-white shadow-md rounded-md">
      <h1 className="font-medium text-2xl leading-none">{title}</h1>
      <div className="w-full h-[1px] bg-black"></div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src="" alt="ic" />
          <h1 className="text-2xl text-[#888888]">{amount}</h1>
        </div>
        <div className="flex gap-2">
          <img src="" alt="ic" />
          <h1 className="text-[14px] text-[#00D83C]">{percent}</h1>
        </div>
      </div>
      <h1 className="text-right text-[14px] text-[#888888]">
        naik dari bulan jan 2022
      </h1>
    </div>
  );
};

export default RecapCard;
