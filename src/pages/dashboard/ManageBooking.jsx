import React from "react";
import { Link } from "react-router-dom";
import RecapDashboard from "../../components/RecapDashboard";
import ButtonAdd from "../../components/ButtonAdd";
import Delete from "../../assets/trash.svg";
import Edit from "../../assets/edit.svg";

const ManageBooking = () => {
  const datas = [
    {
      no: "1",
      nama: "Tengku",
      nik: "1571021703010022",
      waktu: "08:00 - 11:00",
      tanggal: "2022-11-14",
      dosis: "Pertama",
      antrian: "1",
      status: "Proses",
    },
    {
      no: "2",
      nama: "Afifah",
      nik: "1571021703010022",
      waktu: "08:00 - 11:00",
      tanggal: "2022-11-14",
      dosis: "Pertama",
      antrian: "2",
      status: "Proses",
    },
    {
      no: "3",
      nama: "Eridani",
      nik: "1571021703010022",
      waktu: "08:00 - 11:00",
      tanggal: "2022-11-14",
      dosis: "Pertama",
      antrian: "3",
      status: "Proses",
    },
  ];

  return (
    <section className="h-full w-full px-8 mt-8">
      <RecapDashboard title="Manage Booking" />
      <div className="flex items-center my-8 gap-48">
        <div className="flex-1">
          <form className="flex gap-8">
            <div className="relative w-full">
              <input
                className="flex-[70%] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5"
                type="text"
                placeholder="Cari......"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <select className="flex-[30%] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-2.5">
              <option value="" disabled selected>
                Urut Berdasarkan
              </option>
              <option value="">Tanggal</option>
              <option value="">Waktu</option>
            </select>
          </form>
        </div>
        <ButtonAdd pathFor="add-booking" btnFor="Tambah Booking" />
      </div>
      <table className="w-full rounded-lg shadow-md text-[#373737] bg-white">
        <thead>
          <tr className="border-b-[1px]">
            <th className="py-4">No</th>
            <th className="py-4">Nama Pemesan</th>
            <th className="py-4">NIK</th>
            <th className="py-4">Waktu</th>
            <th className="py-4">Tanggal</th>
            <th className="py-4">Dosis</th>
            <th className="py-4">Antrian</th>
            <th className="py-4">Status Pesanan</th>
            <th className="w-[240px] py-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr key={data.no} className="border-b-[1px]">
              <th className="font-normal">{data.no}</th>
              <th className="font-normal">{data.nama}</th>
              <th className="font-normal">{data.nik}</th>
              <th className="font-normal">{data.waktu}</th>
              <th className="font-normal">{data.tanggal}</th>
              <th className="font-normal">{data.dosis}</th>
              <th className="font-normal">{data.antrian}</th>
              <th className="font-normal">{data.status}</th>
              <th className="w-[240px] flex justify-center items-center gap-4 py-4 px-6 font-normal">
                <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 mr-3 rounded">
                  <img src={Delete} alt="del" />
                </button>
                <Link
                  to="edit-booking"
                  className="bg-[#0057FF] hover:bg-blue-800 text-white py-2 px-4 rounded"
                >
                  <img src={Edit} alt="edit" />
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ManageBooking;
