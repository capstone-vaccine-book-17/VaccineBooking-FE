import React from "react";
import googlePlay from "../assets/googlePlay.svg";
import appleLogo from "../assets/appleLogo.svg";
import frameWVAC from "../assets/frameWVAC.svg";

const Hero = () => {
  return (
    <section className="w-screen flex">
      <div className="w-full flex flex-row justify-around items-center">
        <div className="mx-40">
          <div className="text-[32px] font-semibold mb-4">
            <h1>Jaga Keluarga mu</h1>
            <h1>Ayo Lakukan Vaksinasi !</h1>
          </div>
          <div className="text-base font-medium mb-10 w-[500px]">
            <p>
              Sudah lebih dari 100 juta orang sudah vaksin, kamu kapan vaksinnya
              nih ?
            </p>
          </div>
          <div className="flex flex-row gap-[16px]">
            <button
              type="button"
              class="text-white bg-[#3366FF] rounded-lg hover:bg-[#3366FF]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
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
              class="text-white bg-[#050708] rounded-lg hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
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
        <div className="mr-40 mb-[50px] mt-5">
          <img src={frameWVAC} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
