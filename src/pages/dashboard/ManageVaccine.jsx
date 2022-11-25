import React from "react";
import RecapDashboard from "../../components/RecapDashboard";

const ManageVaccine = () => {
  const datas = [
    {
      no: 1,
      jenis: "Corona Vac",
      kuota: "2000",
      expired: "2023-11-14",
    },
    {
      no: 2,
      jenis: "Moderna",
      kuota: "1000",
      expired: "2023-11-14",
    },
    {
      no: 3,
      jenis: "AstraZeneca",
      kuota: "3000",
      expired: "2023-11-14",
    },
  ];

  return (
    <section className="h-full w-full px-8 mt-8">
      <RecapDashboard title="Manage Vaksin" />
      <table className="w-full rounded-lg shadow-md text-[#373737] bg-white">
        <thead>
          <tr className="border-b-[1px]">
            <th className="py-4">No</th>
            <th className="py-4">Jenis Vaksin</th>
            <th className="py-4">Kuota</th>
            <th className="py-4">Expired Time</th>
            <th className="w-[240px] py-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr key={data.no} className="border-b-[1px]">
              <th className="font-normal">{data.no}</th>
              <th className="font-normal">{data.jenis}</th>
              <th className="font-normal">{data.kuota}</th>
              <th className="font-normal">{data.expired}</th>
              <th className="w-[240px] flex justify-center items-center gap-4 py-4 px-6 font-normal">
                <button class="bg-red-500 hover:bg-gray-700 text-white py-2 px-4 mr-3 rounded">
                  <img src="" alt="del" />
                </button>
                <button class="bg-[#0057FF] hover:bg-gray-700 text-white py-2 px-4 rounded">
                  <img src="" alt="edit" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ManageVaccine;
