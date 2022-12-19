import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../store/features/dashboardSlice";
import Breadcrumbs from "./Breadcrumbs";
import RecapCard from "./RecapCard";

const RecapDashboard = ({ title }) => {
  const datas = useSelector((state) => state.dashboard.data);
  const loading = useSelector((state) => state.dashboard.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  const vaccineAvailable = datas?.vaccine_available;
  const bookingsToday = datas?.booking_today;
  const bookingsRegistered = datas?.bookings_registered;

  return (
    <div className="flex flex-col gap-4 p-6 mb-8 justify-between bg-white drop-shadow-md rounded-md">
      <h1 className="text-[32px] font-semibold">{title}</h1>
      <Breadcrumbs />
      <div className="w-full flex justify-between">
        <RecapCard
          title="Kuota vaksin tersedia"
          amount={vaccineAvailable}
          load={loading}
        />
        <RecapCard
          title="Booking hari ini"
          amount={bookingsToday}
          load={loading}
        />
        <RecapCard
          title="Total pendaftar vaksin"
          amount={bookingsRegistered}
          load={loading}
        />
      </div>
    </div>
  );
};

export default RecapDashboard;
