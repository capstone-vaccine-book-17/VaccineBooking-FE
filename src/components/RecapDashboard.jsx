import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../store/features/dashboardSlice";
import Breadcrumbs from "./Breadcrumbs";
import RecapCard from "./RecapCard";

const RecapDashboard = ({ title }) => {
  const datas = useSelector((state) => state.dashboard.data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  const vaccineAvailable = datas?.data.vaccine_available;
  const bookingsToday = datas?.data.booking_today;
  const bookingsRegistered = datas?.data.bookings_registered;

  return (
    <div className="flex flex-col gap-4 p-6 mb-8 justify-between bg-white drop-shadow-md rounded-md">
      <h1 className="text-[32px] font-semibold">{title}</h1>
      <Breadcrumbs />
      <div className="w-full flex justify-between">
        <RecapCard title="Kuota vaksin tersedia" amount={vaccineAvailable} />
        <RecapCard title="Booking hari ini" amount={bookingsToday} />
        <RecapCard title="Total pendaftar vaksin" amount={bookingsRegistered} />
      </div>
    </div>
  );
};

export default RecapDashboard;
