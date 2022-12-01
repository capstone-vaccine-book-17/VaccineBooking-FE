import React from "react";
import { Link } from "react-router-dom";
import RecapDashboard from "../../components/RecapDashboard";

const MainDashboard = () => {
  const datas = [
    {
      date: "14-11-2022",
      time: "08.00 - 10.00",
      jenis: "Sinovac",
      kuota: "200",
      dosis: "Pertama",
      status: "Selesai",
    },
    {
      date: "14-11-2022",
      time: "13.00 - 15.00",
      jenis: "Corona Vac",
      kuota: "200",
      dosis: "Kedua",
      status: "Proses",
    },
    {
      date: "14-11-2022",
      time: "15.00 - 17.00",
      jenis: "AstraZeneca",
      kuota: "200",
      dosis: "Ketiga",
      status: "Proses",
    },
    {
      date: "14-11-2022",
      time: "15.00 - 17.00",
      jenis: "Booster",
      kuota: "200",
      dosis: "Keempat",
      status: "Proses",
    },
  ];

  return (
    <section className="h-full w-full px-8 mt-8">
      <RecapDashboard title="Dashboard" />
      <table className="w-full rounded-lg shadow-md text-[#373737] bg-white">
        <caption className="text-left text-white font-semibold bg-[#254EDB] rounded-t-lg p-4 text-2xl">
          <h1>Session</h1>
        </caption>
        <thead>
          <tr className="border-b-[1px]">
            <th className="py-4">Tanggal</th>
            <th className="py-4">Jam</th>
            <th className="py-4">Jenis</th>
            <th className="py-4">Kuota</th>
            <th className="py-4">Dosis</th>
            <th className="py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index} className="border-b-[1px]">
              <th className="font-normal py-4">{data.date}</th>
              <th className="font-normal py-4">{data.time}</th>
              <th className="font-normal py-4">{data.jenis}</th>
              <th className="font-normal py-4">{data.kuota}</th>
              <th className="font-normal py-4">{data.dosis}</th>
              <th className="font-normal py-4">{data.status}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MainDashboard;
