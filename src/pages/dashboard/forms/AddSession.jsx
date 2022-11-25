import React from "react";

const AddSession = () => {
  return (
    <>
      <section className="h-full w-full px-8 mt-8">
        <div className="w-full bg-white rounded-md p-8 shadow-md">
          <form className="flex justify-between gap-60" action="">
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <label className="text-xl" for="namaSesi">
                  Nama Sesi
                </label>
                <input
                  className="bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3"
                  type="text"
                  name=""
                  placeholder="Masukkan Nama Sesi"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xl" for="nik">
                  Tanggal
                </label>
                <input
                  className="bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3"
                  type="date"
                  name=""
                  placeholder=""
                />
              </div>
              <div className="space-y-2">
                <label className="text-xl" for="waktuMulai">
                  Waktu Mulai
                </label>
                <input
                  className="bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3"
                  type="time"
                  name=""
                  placeholder=""
                />
              </div>
              <div className="space-y-2">
                <label className="text-xl" for="waktuBerhenti">
                  Waktu Berakhir
                </label>
                <input
                  className="bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3"
                  type="time"
                  name=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <div className="flex-1 space-y-2">
                <label className="text-xl" for="jenisVaksin">
                  Jenis Vaksin
                </label>
                <select className="bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-3">
                  <option value="" selected>
                    Pilih Vaksin
                  </option>
                  <option value="">Corona Vac</option>
                  <option value="">COVID-19 Bio Farma</option>
                  <option value="">AstraZeneca</option>
                  <option value="">Moderna</option>
                  <option value="">Pfizer</option>
                </select>
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-xl" for="dosis">
                  Dosis
                </label>
                <select className="bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-3">
                  <option value="" selected>
                    Pilih Dosis
                  </option>
                  <option value="">Pertama</option>
                  <option value="">Kedua</option>
                  <option value="">Ketiga</option>
                  <option value="">Keempat</option>
                  <option value="">Booster</option>
                </select>
              </div>
            </div>
          </form>
          <div className="w-full flex justify-end ">
            <button
              className="mt-16 text-white bg-[#0057FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5"
              type="submit"
            >
              Tambah Data
            </button>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default AddSession;
