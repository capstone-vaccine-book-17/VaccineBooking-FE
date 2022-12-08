import React from "react";
import { Link } from "react-router-dom";
import RecapDashboard from "../../components/RecapDashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSession } from "../../store/features/sessionSlice";
import { fetchBooking } from "../../store/features/bookingSlice";
import DotsWhite from "../../assets/dotsWhite.png";
import ButtonAdd from "../../components/ButtonAdd";

const MainDashboard = () => {
  const datasSession = useSelector((state) => state.session.data);
  const datasBooking = useSelector((state) => state.booking.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSession());
    dispatch(fetchBooking());
  }, [dispatch]);

  return (
    <section className="h-full w-full px-8 mt-8 mb-8">
      <RecapDashboard title="Dashboard" />
      <table className="w-full rounded-lg shadow-md text-[#373737] bg-white mb-8">
        <caption className="text-left text-white font-semibold bg-[#254EDB] rounded-t-lg p-4 text-2xl">
          <div className="flex justify-between items-center">
            <h1>Data Pemesan Vaksin</h1>
            <img src={DotsWhite} alt="" />
          </div>
        </caption>
        <section className="h-full w-full px-8 mt-8 mb-8">
          <table className="w-full rounded-lg text-[#373737] bg-white">
            <thead>
              <tr className="border-b-[1px] text-xl text-center">
                <th className="py-4 w-[100px]">Tanggal</th>
                <th className="py-4">Jam</th>
                <th className="py-4">Jenis</th>
                <th className="py-4">Kuota</th>
                <th className="py-4">Dosis</th>
                <th className="py-4 w-[80px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {datasSession.map((session, index) => (
                <tr
                  key={index}
                  className="border-b-[1px] capitalize text-center"
                >
                  <th className="font-normal py-4">{session.date}</th>
                  <th className="font-normal py-4">
                    {session.startTime} - {session.endTime}
                  </th>
                  <th className="font-normal py-4">{session.vaccine_name}</th>
                  <th className="font-normal py-4">{session.kuota}</th>
                  <th className="font-normal py-4">{session.dosis}</th>
                  <th className="font-normal py-4">{session.status}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-8">
            <ButtonAdd pathFor="/dashboard/session" btnFor="Selengkapnya" />
          </div>
        </section>
      </table>

      <table className="w-full rounded-lg shadow-md text-[#373737] bg-white">
        <caption className="text-left text-white font-semibold bg-[#254EDB] rounded-t-lg p-4 text-2xl">
          <div className="flex justify-between items-center">
            <h1>Data Pemesan Vaksin</h1>
            <img src={DotsWhite} alt="" />
          </div>
        </caption>
        <section className="h-full w-full px-8 mt-8 mb-8">
          <table className="w-full rounded-lg text-[#373737] bg-white">
            <thead>
              <tr className="border-b-[1px] text-xl text-center">
                <th className="py-4 w-[240px]">Nama Pemesan</th>
                <th className="py-4">NIK</th>
                <th className="py-4">Waktu</th>
                <th className="py-4">Tanggal</th>
                <th className="py-4">Dosis</th>
                <th className="py-4">Antrian</th>
                <th className="py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {datasBooking.map((booking, index) => (
                <tr
                  key={index}
                  className="border-b-[1px] capitalize text-center"
                >
                  <th className="font-normal py-4">{booking.citizen_name}</th>
                  <th className="font-normal">{booking.nik}</th>
                  <th className="font-normal py-4">
                    {booking.start_time} - {booking.end_time}
                  </th>
                  <th className="font-normal py-4">{booking.date}</th>
                  <th className="font-normal py-4">{booking.dosis}</th>
                  <th className="font-normal py-4">{booking.queue}</th>
                  <th className="font-normal py-4 w-[80px]">
                    {booking.status}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-8">
            <ButtonAdd pathFor="/dashboard/booking" btnFor="Selengkapnya" />
          </div>
        </section>
      </table>
      <br />
    </section>
  );
};

export default MainDashboard;
