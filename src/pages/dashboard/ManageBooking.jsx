import React from "react";

const ManageBooking = () => {
  const datas = [
    {no: "1", nama:"Tengku", nik:"1571021703010022", waktu:"08:00 - 11:00", tanggal:"2022-11-14", dosis:"Pertama", antrian:"1", status:"Proses"},
    {no: "2", nama:"Afifah", nik:"1571021703010022", waktu:"08:00 - 11:00", tanggal:"2022-11-14", dosis:"Pertama", antrian:"2", status:"Proses"},
    {no: "3", nama:"Eridani", nik:"1571021703010022", waktu:"08:00 - 11:00", tanggal:"2022-11-14", dosis:"Pertama", antrian:"3", status:"Proses"},
  ]
  return (
    <section className="h-full w-full px-8 mt-8">
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
                <img src="" alt="del" />
                <img src="" alt="edit" />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
    
  );
};

export default ManageBooking;
