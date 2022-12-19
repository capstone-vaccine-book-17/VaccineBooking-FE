import React from "react";

const FeatureCard = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center gap-10">
      <div className="w-20">
        <img className="w-full" src={icon} alt="img" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-[#646464] font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
