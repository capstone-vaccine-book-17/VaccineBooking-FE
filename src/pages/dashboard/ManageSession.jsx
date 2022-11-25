import React from "react";

const ManageSession = () => {
  const data = [
    {
      no: 1,
      session: "Sesi 1",
      date: "14-11-2022",
      time: "08.00 - 10.00",
      jenis: "Sinovac",
      kuota: "200",
      dosis: "Pertama",
      status: "Selesai",
    },
    {
      no: 2,
      session: "Sesi 2",
      date: "14-11-2022",
      time: "13.00 - 15.00",
      jenis: "Corona Vac",
      kuota: "200",
      dosis: "Kedua",
      status: "Proses",
    },
    {
      no: 3,
      session: "Sesi 3",
      date: "14-11-2022",
      time: "15.00 - 17.00",
      jenis: "AstraZeneca",
      kuota: "200",
      dosis: "Ketiga",
      status: "Proses",
    },
    {
      no: 4,
      session: "Sesi 4",
      date: "14-11-2022",
      time: "15.00 - 17.00",
      jenis: "Booster",
      kuota: "200",
      dosis: "Keempat",
      status: "Proses",
    },
  ];

  return (
    <section className=" bg-[#FAFAFA]">
      <section className="justify-between mx-8 mb-6 grid grid-cols-2 gap-4 place-content-stretch">
        <form className="flex items-center">
          <label for="simple-search" className="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <input
              type="text"
              id="simple-search"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5"
              placeholder="Cari....."
              required
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </form>
        <div className="flex justify-between">
          <button
            type="button"
            class="text-[#888888] bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
          >
            Urut Berdasarkan
          </button>
          <button
            type="button"
            class="text-white bg-[#0057FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Tambah Sesi
          </button>
        </div>
      </section>
      <section className="h-full w-full px-8 mt-8">
        <table className="w-full rounded-lg shadow-md text-[#373737] bg-white">
          <thead>
            <tr className="border-b-[1px]">
              <th className="py-4">No</th>
              <th className="py-4">Nama Sesi</th>
              <th className="py-4">Tanggal</th>
              <th className="py-4">Jam</th>
              <th className="py-4">Jenis</th>
              <th className="py-4">Kuota</th>
              <th className="py-4">Dosis</th>
              <th className="py-4">Status</th>
              <th className="w-[240px] py-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr key={data.no} className="border-b-[1px]">
                <th className="font-normal">{data.no}</th>
                <th className="font-normal">{data.session}</th>
                <th className="font-normal">{data.date}</th>
                <th className="font-normal">{data.time}</th>
                <th className="font-normal">{data.jenis}</th>
                <th className="font-normal">{data.kuota}</th>
                <th className="font-normal">{data.dosis}</th>
                <th className="font-normal">
                  <p className="bg-[#84A9FF] text-[#FAFAFA] px-[31px] py-[4px] rounded-lg">
                    {data.status}
                  </p>
                </th>
                <th className="w-[240px] flex justify-center items-center gap-4 py-4 px-6 font-normal ">
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
    </section>
  );
};

export default ManageSession;
