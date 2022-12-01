import React from "react";
import whiteLogo from "../assets/whiteLogo.svg";
import fbLogo from "../assets/fbLogo.svg";
import twtLogo from "../assets/twtLogo.svg";
import igLogo from "../assets/igLogo.svg";
import ytLogo from "../assets/ytLogo.svg";
import googlePlay from "../assets/googlePlay.svg";
import appleLogo from "../assets/appleLogo.svg";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center flex-col">
      <div className="w-full text-[#FFFFFF] bg-[#091A7A] px-16 py-8">
        <div className="grid grid-cols-4 gap-x-2">
          <div className="flex flex-row">
            <img className="w-[40px] h-[40px] mr-4" src={whiteLogo} alt="" />
            <p className="text-[32px] font-semibold">WVAC</p>
          </div>
          <div className="grid grid-rows-2 gap-y-8">
            <div className="text-[14px] ">
              <p className="text-lg font-semibold mb-4">Perusahaan</p>
              <div className="grid grid-rows-2">
                <a className="mb-2" href="#">
                  Tentang Kami
                </a>
                <a className="mb-2" href="">
                  Karir
                </a>
              </div>
            </div>
            <div className="text-[14px] ">
              <p className="text-lg font-semibold mb-4">Lainnya</p>
              <div className="grid grid-rows-2">
                <a className="mb-2" href="">
                  Syarat & Ketentuan
                </a>
                <a className="mb-2" href="">
                  Kebijakan Privasi
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[232px]">
            <p className="text-lg font-semibold mb-4">Hubungi Kami</p>
            <div className="text-[14px] gap-y-2">
              <p className="mb-2">
                Jl. Raya Tidar No.23, Kec. Sukun, Kota Malang, Jawa Timur, 65146
              </p>
              <p className="mb-2">Phone: 081-0881-0881</p>
              <p className="mb-2">Email: help@wvac.com</p>
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold mb-4">Download WVAC app</p>
            <div className="flex flex-row gap-[16px]">
              <button
                type="button"
                className="text-white bg-[#3366FF] rounded-lg hover:bg-[#3366FF]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
              >
                <img className="w-[40px] mr-2" src={googlePlay} alt="" />
                <a
                  className="text-left text-[14px] font-medium"
                  href="https://play.google.com/store/apps"
                >
                  Dapatkan di
                  <p className="text-[20px] font-semibold">Google Play</p>
                </a>
              </button>
              <button
                type="button"
                className="text-white bg-[#050708] rounded-lg hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
              >
                <img className="w-[40px] mr-2" src={appleLogo} alt="" />
                <a
                  className="text-left text-[14px] font-medium"
                  href="https://www.apple.com/id/app-store/"
                >
                  Download on the
                  <p className="text-[20px] font-semibold">Apple Store</p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between px-16 py-4 bg-[#000B47] text-[#FFFFFF] text-lg">
        <p>Hak Cipta© 2022 WVAC</p>
        <div className="flex flex-row gap-2 items-center">
          <p className="mr-4">Ikuti kami di</p>
          <ul className="flex flex-row gap-2">
            <a href="https://id-id.facebook.com/">
              <img className="h-[20px] mr-4" src={fbLogo} alt="" />
            </a>
            <a
              href="https://twitter.com/i/flow/login
              "
            >
              <img className="h-[20px] mr-4" src={twtLogo} alt="" />
            </a>
            <a
              href="https://www.instagram.com/
           "
            >
              <img className="h-[20px] mr-4" src={igLogo} alt="" />
            </a>
            <a
              href="https://www.youtube.com/
            "
            >
              <img className="h-[20px] mr-4" src={ytLogo} alt="" />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
