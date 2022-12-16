import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../components/Breadcrumbs';
import { fetchSession } from '../store/features/sessionSlice';
import ReBookCard from './ReBookCard';

const BookingTopSection = ({ title, id }) => {
  const loading = useSelector((state) => state.session.loading);
  return (
    <div className='flex flex-col gap-4 p-6 mb-8 justify-between bg-white drop-shadow-md rounded-md'>
      <h1 className='text-[32px] font-semibold'>{title}</h1>
      <Breadcrumbs />
      <div className='w-full'>
        <ReBookCard
          title='Hari ini'
          // load={loading}
        />
      </div>
    </div>
  );
};

export default BookingTopSection;
