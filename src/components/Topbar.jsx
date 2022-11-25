import React from 'react';

const Topbar = () => {
  return (
    <div className='w-full'>
      <nav className='flex justify-between items-center px-8 py-8 bg-[#ffffff]'>
        <div>
          <h1 className='text-2xl'>Welcome</h1>
        </div>
        <div className='flex gap-12'>
          <img src='' alt='icon' />
          <img src='' alt='profile' />
        </div>
      </nav>
    </div>
  );
};

export default Topbar;