import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const listMenu = [
    {
      menu: "Overview",
      path: "#hero",
    },
    {
      menu: "Layanan",
      path: "#feature",
    },
    {
      menu: "Tentang Kami",
      path: "#about",
    },
    {
      menu: "Tim Kami",
      path: "#team",
    },
  ];

  return (
    <header className="flex justify-center">
      <nav className="w-full fixed z-10 bg-white py-4 px-8 drop-shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <img className="w-10" src={Logo} alt="" />
            </div>
            <a href="hero" className="text-[#050505] text-[32px] font-semibold">
              <span className="text-[#3366FF]">W</span>
              <span className="text-[#FF312D]">V</span>accine
            </a>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex gap-8">
              {listMenu.map((list) => (
                <a
                  href={list.path}
                  key={list.menu}
                  className="text-[#646464] hover:text-[#3366FF] text-[18px] font-medium"
                >
                  {list.menu}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 font-medium text-[18px]">
              <Link
                to="/register"
                className="text-white bg-[#0057FF] border-2 border-[#0057FF] px-4 py-2 rounded-[8px]"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text-[#0057FF] bg-white border-2 border-[#0057FF] px-4 py-2 rounded-[8px] hover:bg-[#0057FF] hover:text-white"
              >
                Login as Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
