import React from "react";
import UIUX from '../assets/UIUX.svg';
import BE from '../assets/BE.svg';
import FE from '../assets/FE.svg';
import QE from '../assets/QE.svg';

const Team = () => {
  return (
    <section className="w-screen flex justify-center text-6xl">
      <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xl font-Poppins tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Tim Kami
        </p>
      </div>
      <div className="w-full flex gap-10 justify-between">
        <div>
          <div className="mx-auto relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={UIUX}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-start text-base text-gray-800">1. Tengku Mahmudi</p>
            <p className="text-start text-base text-gray-800">2. AFIFAH CAHYANINGSIH</p>
            <p className="text-start text-base text-gray-800">3. Ilham Ismail</p>
            <p className="text-start text-base text-gray-800">4. ERIDANI WAHYU NUGRAHA</p>
            <p className="text-start text-base text-gray-800">5. GILANG EKO PRASETYO</p>
            <div className="flex items-center space-x-3 sm:justify-center">
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={BE}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
          <p className="text-start text-base text-gray-800">1. MUHAMMAD FACHRUDIN THOHARI</p>
            <p className="text-start text-base text-gray-800">2. KADEK DIKA RAMA SURYADI</p>
            <div className="flex items-center space-x-3 sm:justify-center">
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={FE}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
          <p className="text-start text-base text-gray-800">WEBSITE</p>
            <p className="text-start text-base text-gray-800">1. ERWIN PURNOMO</p>
            <p className="text-start text-base text-gray-800">2. YUDHA PANCA PRANATA</p>
            <p className="text-start text-base text-gray-800">3. HALIMAH</p>
            <p className="text-start text-base text-gray-800">4. Chyci Ayu Winata</p>
            <p className="text-start text-base text-gray-800">MOBILE</p>
            <p className="text-start text-base text-gray-800">1. RIVALDI HIDAYAT</p>
            <p className="text-start text-base text-gray-800">2. NORBERTUS DEWA RUCCI</p>
            <p className="text-start text-base text-gray-800">3. BENEDIKTUS SATRIYA MUKTI</p>
            <p className="text-start text-base text-gray-800">4. Sanchico Ryan Almsyah</p>
            <p className="text-start text-base text-gray-800">5. RUSLAN</p>
            <div className="flex items-center space-x-3 sm:justify-center">
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={QE}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
          <p className="text-start text-base text-gray-800">1. MOCH. YUSUF EFENDI</p>
            <p className="text-start text-base text-gray-800">2. MUH. FIQRAM MAULANA</p>
            <div className="flex items-center space-x-3 sm:justify-center">
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Team;
