import React from "react";
import TopSection from "../../../components/TopSection";

const AddVaccine = () => {
  return (
    <section className="h-full w-full px-8 mt-8">
      <TopSection title="Tambah Vaksin" />
      <div className="w-full bg-white rounded-md p-8 shadow-md">
        <form className="flex justify-between gap-60" action="">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <label className="text-xl" for="jenisvaksin">
                Jenis Vaksin
              </label>
              <input
                className="bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3"
                type="text"
                name=""
                placeholder="Nama Vaksin"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xl" for="kuota">
                Kuota
              </label>
              <input
                className="bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3"
                type="text"
                name=""
                placeholder="00:00"
              />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <label className="text-xl" for="Sesi Tersedia">
              Experied Time
            </label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
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
  );
};

export default AddVaccine;
