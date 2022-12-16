import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSession } from '../store/features/sessionSlice';

const ReBookCard = ({ title, load }) => {
  const listData = useSelector((state) => state.session.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSession());
  }, [dispatch]);

  return (
    <div className='w-full'>
      <div className='flex gap-4 pb-2 px-2'>
        {listData.map((session) => (
          <div
            key={session.session_id}
            className='flex flex-col px-4 bg-white shadow-md rounded-md gap-2'
          >
            <div className='flex justify-between items-center gap-8'>
              <h1 className='font-medium text-lg leading-none'>{title}</h1>
              <h1 className='flex-1 font-medium text-lg'>{session.date}</h1>
            </div>
            <div className='w-full h-[1px] bg-black' />
            <div className='flex justify-between items-center'>
              <div className='flex gap-3 items-center'>
                {load ? (
                  <h1 className='text-2xl text-[#888888]'>loading...</h1>
                ) : (
                  <div className='text-base text-black'>
                    <p>{session.name}</p>
                    <p>{session.vaccine_name}</p>
                  </div>
                )}
              </div>
              <div className='flex gap-3 items-center'>
                {load ? (
                  <h1 className='text-2xl text-[#888888]'>loading...</h1>
                ) : (
                  <div className='flex flex-col text-right text-base text-black'>
                    <p className='capitalize'>{session.dosis}</p>
                    <p>
                      {session.startTime} - {session.endTime}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReBookCard;
