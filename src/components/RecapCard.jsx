import React from "react";
import Medic from "../assets/medic.png";
import Chart from "../assets/chart.png";
import Dots from "../assets/dots.png";

const RecapCard = ({ title, amount }) => {
  return (
    <div className="w-[420px] p-4 flex flex-col gap-3 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-2xl leading-none">{title}</h1>
        <img src={Dots} alt="" />
      </div>
      <div className="w-full h-[1px] bg-black"></div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={Medic} alt="ic" />
          <h1 className="text-2xl text-[#888888]">{amount}</h1>
        </div>
        <div className="flex">
          <img src={Chart} alt="ic" />
        </div>
      </div>
    </div>
  );
};

export default RecapCard;
