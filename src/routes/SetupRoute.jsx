import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainDashboard from '../pages/dashboard/MainDashboard';
import ManageBooking from '../pages/dashboard/ManageBooking';
import ManageSession from '../pages/dashboard/ManageSession';
import ManageVaccine from '../pages/dashboard/ManageVaccine';
import LandingPage from '../pages/LandingPage';
import Layout from '../pages/Layout';
import LoginPage from '../pages/LoginPage';
import NotFound from '../pages/NotFound';

const SetupRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Layout />}>
          <Route path='' element={<MainDashboard />} />
          <Route path='session' element={<ManageSession />} />
          <Route path='vaccine' element={<ManageVaccine />} />
          <Route path='booking' element={<ManageBooking />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRoute;
