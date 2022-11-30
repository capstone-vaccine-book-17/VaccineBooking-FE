import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminProfile from "../pages/dashboard/AdminProfile";
import AddBooking from "../pages/dashboard/forms/AddBooking";
import AddSession from "../pages/dashboard/forms/AddSession";
import AddVaccine from "../pages/dashboard/forms/AddVaccine";
import EditBooking from "../pages/dashboard/forms/EditBooking";
import EditSession from "../pages/dashboard/forms/EditSession";
import EditVaccine from "../pages/dashboard/forms/EditVaccine";
import MainDashboard from "../pages/dashboard/MainDashboard";
import ManageBooking from "../pages/dashboard/ManageBooking";
import ManageSession from "../pages/dashboard/ManageSession";
import ManageVaccine from "../pages/dashboard/ManageVaccine";
import LandingPage from "../pages/LandingPage";
import Layout from "../pages/Layout";
import LayoutManage from "../pages/LayoutManage";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";

const SetupRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<MainDashboard />} />
          <Route path="session" element={<LayoutManage />}>
            <Route index element={<ManageSession />} />
            <Route path="add-sesi" element={<AddSession />} />
            <Route path="edit-sesi" element={<EditSession />} />
          </Route>
          <Route path="vaccine" element={<LayoutManage />}>
            <Route index element={<ManageVaccine />} />
            <Route path="add-vaksin" element={<AddVaccine />} />
            <Route path="edit-vaksin" element={<EditVaccine />} />
          </Route>
          <Route path="booking" element={<LayoutManage />}>
            <Route index element={<ManageBooking />} />
            <Route path="add-booking" element={<AddBooking />} />
            <Route path="edit-booking" element={<EditBooking />} />
          </Route>
          <Route path="profile" element={<AdminProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRoute;
