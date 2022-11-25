import React from "react";

const ManageSession = () => {
  return (
    <>
      <section className=" bg-[#FAFAFA]">
        <section className="flex justify-start items-start px-8 py-8 text-3xl">
          Manage Session
        </section>
        <section className="flex justify-between mx-8 mb-6 grid grid-cols-2 gap-4 place-content-stretch">
          <form className="flex items-center">
            <label for="simple-search" className="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
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
              class="text-[#888888] bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
        <section className="session flex justify-start items-center px-8">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-white-50 text-center">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-medium text-black"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-medium text-black"
                        >
                          Nama Sesi
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-medium text-black"
                        >
                          Tanggal
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-medium text-black"
                        >
                          Jam
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-medium text-black"
                        >
                          Jenis
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-medium text-black"
                        >
                          Kuota
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-medium text-black"
                        >
                          Dosis
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-medium text-black"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xl font-medium text-black"
                        >
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-center">
                      <tr>
                        <td className="px-6 py-4 text-base font-medium text-[#373737] whitespace-nowrap">
                          1
                        </td>
                        <td className="px-6 py-4 text-base text-[#373737] whitespace-nowrap">
                          Sesi 1
                        </td>
                        <td className="px-6 py-4 text-base text-[#373737] whitespace-nowrap">
                          14-11-2022
                        </td>
                        <td className="px-6 py-4 text-base text-[#373737] whitespace-nowrap">
                          08.00 - 10.00
                        </td>
                        <td className="px-6 py-4 text-base text-[#373737] whitespace-nowrap">
                          Sinovac
                        </td>
                        <td className="px-6 py-4 text-base text-[#373737] whitespace-nowrap">
                          200
                        </td>
                        <td className="px-6 py-4 text-base text-[#373737] whitespace-nowrap">
                          Pertama
                        </td>
                        <td className="px-6 py-4 text-base text-[#373737]  whitespace-nowrap">
                          <p className=" bg-[#84A9FF] text-[#FAFAFA] px-[31px] py-[4px] rounded-lg">
                            Selesai
                          </p>
                        </td>
                        <td className="border-collapse">
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <button class="bg-red-500 hover:bg-gray-700 text-white py-2 px-4 mr-3 rounded">
                              Hapus
                            </button>
                            <button class="bg-[#0057FF] hover:bg-gray-700 text-white py-2 px-4 rounded">
                              Edit
                            </button>
                          </td>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ManageSession;
