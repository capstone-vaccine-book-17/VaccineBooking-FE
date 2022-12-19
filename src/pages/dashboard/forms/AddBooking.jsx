import React from 'react';
import BookingTopSection from '../../../components/BookingTopSection';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createBooking } from '../../../store/features/bookingSlice';

const AddBooking = () => {
  const dispatch = useDispatch();
  const datasSession = useSelector((state) => state.session.data);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddBooking = () => {
    dispatch(createBooking(getValues()));
  };

  return (
    <section className='h-full w-full mt-8'>
      <BookingTopSection title='Tambah Booking' />
      <div className='w-full bg-white rounded-md p-8 shadow-md'>
        <form
          onChange={() => getValues()}
          onSubmit={handleSubmit(handleAddBooking)}
          className='flex justify-between gap-60'
          action=''
        >
          <div className='flex-1 space-y-8'>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='nama'>
                Nama Pemesan
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                {...register('nama', {
                  required: 'Nama tidak boleh kosong!',
                })}
                placeholder='Masukkan Nama Pemesan'
              />
              <p className='text-red-700'>{errors.nama?.message}</p>
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='nik'>
                NIK
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                {...register('nik', {
                  required: 'NIK tidak boleh kosong!',
                })}
                placeholder='Masukkan NIK Pemesan'
              />
              <p className='text-red-700'>{errors.nik?.message}</p>
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='address'>
                Alamat
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                {...register('address', {
                  required: 'Alamat tidak boleh kosong!',
                })}
                placeholder='Masukkan Alamat Pemesan'
              />
              <p className='text-red-700'>{errors.address?.message}</p>
            </div>
          </div>
          <div className='flex-1 flex flex-col '>
            <div className='flex-1 space-y-2'>
              <label className='text-xl' htmlFor='session_id'>
                Sesi Tersedia
              </label>
              <select
                {...register('session_id', {
                  valueAsNumber: true,
                  required: 'Pilih sesi yang tersedia',
                })}
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-3'
              >
                {datasSession?.map((session) => (
                  <option key={session.session_id} value={session.session_id}>
                    {session.name}-{session.vaccine_name}
                  </option>
                ))}
              </select>
              <p className='text-red-700'>{errors.session_id?.message}</p>
            </div>
            <div className='w-full flex justify-end'>
              <button
                className='mt-16 text-white bg-[#0057FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5'
                type='submit'
                onSubmit={handleSubmit(handleAddBooking)}
              >
                Tambah Data
              </button>
            </div>
          </div>
        </form>
      </div>
      <br />
    </section>
  );
};

export default AddBooking;
