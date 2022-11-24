import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl">404</h1>
      <p className="text-3xl font-light">Page Not Found</p>
      <Link to="/dashboard">
        <button className="px-5 py-4 bg-[#0057FF] mt-8 text-white rounded-md">
          Back To Dashboard
        </button>
      </Link>
    </section>
  );
};

export default NotFound;
