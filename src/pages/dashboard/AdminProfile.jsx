import React from "react";
import TopSection from "../../components/TopSection";
import Hospital from "../../assets/hospital.jpg";

const AdminProfile = () => {
  return (
    <section className="h-full w-full px-8 mt-8">
      <TopSection title="Profile Admin" />
      <div className="w-full rounded bg-white shadow-md">
        <div className="relative bg-[#888888] rounded-t-md">
          <h1 className="absolute z-10 text-[40px] text-white font-semibold px-[32px] py-10">
            RS Abadi Santoso
          </h1>
          <img
            className="object-cover opacity-40 w-full h-[306px] rounded-t-md"
            src={Hospital}
            alt="img-admin"
          />
        </div>
        <div className="px-10 pt-8 pb-10 space-y-6">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-[32px] text-[#373737] font-semibold">
                Data Fasilitas Kesehatan
              </h1>
              <div className="w-full h-[2px] bg-black"></div>
            </div>
            <div>
              <h1 className="text-[16px] text-[#888888]">
                Nama Fasilitas Kesehatan
              </h1>
              <h1 className="text-2xl text-[#646464]">RS Abadi Santoso</h1>
              <div className="w-full h-[1px] bg-black mt-2"></div>
            </div>
            <div>
              <h1 className="text-[16px] text-[#888888]">
                Alamat Fasilitas Kesehatan
              </h1>
              <h1 className="text-2xl text-[#646464]">
                Jl. Santoso KM 05 Jakarta
              </h1>
              <div className="w-full h-[1px] bg-black mt-2"></div>
            </div>
            <div>
              <h1 className="text-[16px] text-[#888888]">
                Penanggung Jawab Fasilitas
              </h1>
              <h1 className="text-2xl text-[#646464]">Dr. Albert Sp.OT.</h1>
              <div className="w-full h-[1px] bg-black mt-2"></div>
            </div>
          </div>
          <div>
            <h1 className="text-[32px] text-[#373737] font-semibold">
              Data Akun
            </h1>
            <div className="w-full h-[2px] bg-black mb-6"></div>
            <form>
              <label
                className="text-[16px] text-[#888888] font-normal"
                for="username"
              >
                Username
              </label>
              <input
                className="bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3 mb-4"
                type="text"
                name=""
                placeholder="Username"
              />
              <label
                className="text-[16px] text-[#888888] font-normal"
                for="username"
              >
                Password
              </label>
              <input
                className="bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3"
                type="Password"
                name=""
                placeholder="**********"
              />
              <div className="mt-6">
                <button
                  className="w-full text-white bg-[#0057FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 "
                  type="submit"
                >
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminProfile;
