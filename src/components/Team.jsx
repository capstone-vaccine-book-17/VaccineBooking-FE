import React from "react";
import LogoUI from "../assets/LogoUIUX.png";
import LogoBE from "../assets/logoBE.png";
import LogoFE from "../assets/logoFE.png";
import LogoQA from "../assets/logoQA.png";

const Team = () => {
  return (
    <section id="team" className="w-full py-60">
      <div className="w-full flex flex-col gap-16 justify-center items-center">
        <p className="font-semibold text-[28px]">Tim Kami</p>
        <div className="w-full px-16 flex justify-between">
          <div className="flex flex-col items-center gap-6 text-[14px] font-medium">
            <div className="w-40 h-40 flex justify-center items-center rounded-3xl bg-gradient-to-r from-[#FFCF00] to-[#EB5E03]">
              <img src={LogoUI} alt="" />
            </div>
            <ul className="list-decimal">
              <li>Tengku Hamdi</li>
              <li>Afifah Cahyaningsih</li>
              <li>Ilham Ismail</li>
              <li>Eridani Wahyu Nugraha</li>
              <li>Gilang Eko Prasetyo</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="w-40 h-40 flex justify-center items-center rounded-3xl bg-[#E2F7FE]">
              <img src={LogoBE} alt="" />
            </div>
            <ul className="list-decimal">
              <li>Muhammad Fachrudin Thohari</li>
              <li>Kadek Dika Rama Suryadi</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="w-40 h-40 flex justify-center items-center rounded-3xl bg-[#2F414D]">
              <img src={LogoFE} alt="" />
            </div>
            <div>
              <ul className="list-disc">
                <li>Website</li>
              </ul>
              <ul className="list-decimal">
                <li>Erwin Purnomo</li>
                <li>Yudha Panca Pranata</li>
                <li>Halimah</li>
                <li>Chycik Ayu Winata</li>
              </ul>
              <ul className="list-disc">
                <li>Mobile</li>
              </ul>
              <ul className="list-decimal">
                <li>Rivaldi Hidayat</li>
                <li>Nobertus Dewa Rucci</li>
                <li>Benediktus Satriya Mukti</li>
                <li>Sanchico Ryan Alamsyah</li>
                <li>Ruslan</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="w-40 h-40 flex justify-center items-center rounded-3xl bg-[#254D70]">
              <img src={LogoQA} alt="" />
            </div>
            <ul className="list-decimal">
              <li>Moch. Yusuf Efendi</li>
              <li>Muh. Fiqram Maulana</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
