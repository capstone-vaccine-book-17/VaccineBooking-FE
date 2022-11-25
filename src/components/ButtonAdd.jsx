import React from "react";
import { Link } from "react-router-dom";

const ButtonAdd = ({ btnFor, pathFor }) => {
  return (
    <Link to={pathFor}>
      <button
        type="button"
        className="text-white bg-[#0057FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
      >
        {btnFor}
      </button>
    </Link>
  );
};

export default ButtonAdd;
