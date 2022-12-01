import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <header className="flex justify-center">
      <nav className="w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 drop-shadow-md">
        <div className="flex flex-wrap items-center justify-between ml-8 mr-8 mx-auto">
          <a href="" className="flex items-center">
            <img className="w-[40px] mr-4" src={Logo} alt="" />
            <span className="self-center text-[32px] font-semibold whitespace-nowrap dark:text-white">
              <span className="text-[#3366FF]">W</span>
              <span className="text-[#FF312D]">V</span>accine
            </span>
          </a>
          <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#646464] text-lg font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#646464] text-lg font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#646464] text-lg font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#646464] text-lg font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Tim Kami
                </a>
              </li>
            </ul>
            <div className="flex">
              <button
                type="button"
                className="text-[#FAFAFA] text-lg font-semibold bg-[#0057FF] hover:bg-[#3366FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mx-2 md:mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
              >
                Register
              </button>
              <button
                type="button"
                className="text-[#3366FF] text-lg font-semibold hover:text-white border-2 border-[#3366FF] hover:bg-[#3366FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 text-center mr-2 md:mr-0 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                Login as Admin
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
