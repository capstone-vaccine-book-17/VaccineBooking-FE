import React from "react";
import Logo from "../assets/Logo.png";

const LoginPage = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-[680px] h-[609px] px-[66px] flex flex-col justify-center items-center gap-20 bg-white rounded-3xl drop-shadow-xl">
        <div className="flex items-center gap-[40px]">
          <img src={Logo} alt="" className="w-[80px] h-[80px]" />
          <h1 className="uppercase text-[46px] font-[600] tracking-wide">
            world vaccine
          </h1>
        </div>
        <div className="w-full">
          <form className="px-4 flex flex-col gap-[32px]">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-[20px] text-[#646464] font-[500] mb-2"
              >
                Username
              </label>
              <input type="text" placeholder="Masukkan Username" />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-[20px] text-[#646464] font-[500] mb-2"
              >
                Password
              </label>
              <input type="password" placeholder="Masukkan Password" />
            </div>
          </form>
        </div>
        <div className="w-full px-4">
          <button className="w-full py-[16px] bg-[#0057FF] rounded-md text-white text-[24px]">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
