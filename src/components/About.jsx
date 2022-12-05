import React from "react";
import vaccinePana from "../assets/vaccinePana.svg";
import polygon from "../assets/polygon.svg";

const About = () => {
  return (
    <section id="about" className="w-full pt-20">
      <div className="w-full">
        <div className="flex justify-center text-4xl font-semibold mt-10">
          <h1>Tentang World Vaccine</h1>
        </div>
        <div className="flex justify-end mr-[105px] mb-7">
          <img src={polygon} alt="" />
        </div>
        <div className="flex justify-around items-center flex-row mb-[50px]">
          <div className="mr-[66px] ml-[76px]">
            <img src={vaccinePana} alt="" />
          </div>
          <div>
            <h1 className="text-xl text-[#373737] font-semibold mb-4">
              Platform layanan kesehatan Mobile
            </h1>
            <p className="text-[#888888] text-base font-semibold w-[734px] mr-[64px]">
              <span className="text-[#3C9F19]">World Vaccine </span> merupakan
              suatu platform aplikasi mobile yang menyediakan layanan booking
              vaksin berdasarkan lokasi kamu saat ini dengan harapan dapat
              membantu kamu dimasa pandemi saat ini.
            </p>
            <p className="font-semibold text-[#050505]">
              Sayangi Keluargamu, Ayo Vaksin !
            </p>
          </div>
        </div>
        <div className="flex justify-start ">
          <hr className="ml-[44px] mt-[50px] mb-[18px] w-10 h-10 bg-[#0015D1] rounded-full border-0" />
        </div>
      </div>
    </section>
  );
};

export default About;
