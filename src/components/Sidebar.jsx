import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import Arrow from '../assets/Arrow.png';
import Dash from '../assets/dashboard.png';
import Sesi from '../assets/session.png';
import Vaksin from '../assets/vaccine.png';
import Book from '../assets/booking.png';
import News from '../assets/news.png';
import Admin from '../assets/admin.png';
import { Link, useNavigate } from 'react-router-dom';
import { authAdmin } from '../utils/authAdmin';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSide = () => {
    setOpen(!open);
  };

  const menus = [
    { title: 'Dashboard', path: '/dashboard', icon: Dash },
    { title: 'Manage Sesi', path: '/dashboard/session', icon: Sesi },
    {
      title: 'Manage Vaksin',
      path: '/dashboard/vaccine',
      icon: Vaksin,
    },
    { title: 'Manage Booking', path: '/dashboard/booking', icon: Book },
    { title: 'Vaksin News', path: '/dashboard/user', icon: News },
    { title: 'Profile', path: '/dashboard/profile', icon: Admin },
  ];

  return (
    <aside className='flex'>
      <div
        className={`${
          !open ? 'w-[120px]' : 'w-72'
        } h-screen bg-white drop-shadow-xl relative duration-100`}
      >
        <div className='flex justify-center items-center gap-4 pt-8'>
          <img className='w-[40px]' src={Logo} alt='' />
          <h1
            className={`${
              !open ? 'hidden' : 'block'
            } text-3xl font-semibold text-[#0057FF]`}
          >
            <span className='text-[#22E569]'>W</span>VAC
          </h1>
        </div>
        <div
          className={`${
            !open ? 'rotate-180' : ''
          } absolute cursor-pointer -right-6 top-16 drop-shadow-lg`}
          onClick={toggleSide}
        >
          <img src={Arrow} alt='' />
        </div>
        <div className='flex justify-center'>
          <ul className='mt-20'>
            {menus.map((menu, index) => (
              <li
                key={index}
                className='py-4 bg-slate-100 hover:bg-[#0057FF] hover:text-white font-medium mb-6 rounded-md px-4 cursor-pointer shadow-md'
              >
                <Link to={menu.path}>
                  <div className='flex gap-3'>
                    <img src={menu.icon} alt='' />
                    <h1 className={!open ? 'hidden' : 'block'}>{menu.title}</h1>
                  </div>
                </Link>
              </li>
            ))}
            <button
              onClick={() => {
                authAdmin.setLogout(navigate);
              }}
              className={
                !open
                  ? 'hidden'
                  : 'w-full text-[#DB202D] bg-white border-2 border-[#DB202D] px-4 py-2 rounded-[8px] hover:bg-[#DB202D] hover:text-white'
              }
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
