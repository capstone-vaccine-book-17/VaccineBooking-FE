import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authAdmin } from '../utils/authAdmin';
import Notify from '../assets/notify.png';

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full'>
      <nav className='flex justify-between items-center px-12 py-5 bg-[#ffffff]'>
        <div>
          <h1 className='text-2xl'>Welcome</h1>
        </div>
        <div className='flex items-center gap-12'>
          <img className='w-8 h-8' src={Notify} alt='icon' />
          <div className='w-14 h-14 rounded-full bg-blue-700'></div>
          <button
            onClick={() => {
              authAdmin.setLogout(navigate);
            }}
            className='text-[#DB202D] bg-white border-2 border-[#DB202D] px-4 py-2 rounded-[8px] hover:bg-[#DB202D] hover:text-white'
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
