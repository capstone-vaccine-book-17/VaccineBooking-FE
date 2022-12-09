import React from 'react';
import { useForm } from 'react-hook-form';
import TopSection from '../../../components/TopSection';
import { useDispatch, useSelector } from 'react-redux';
import { updateBooking } from '../../../store/features/bookingSlice';

const EditBooking = () => {
  const { getValues, register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const dataToEdit = useSelector((state) => state.booking.dataID);
  console.log(dataToEdit);

  const handleEditBooking = () => {
    const dataEdited = {
      id: dataToEdit.booking_id,
      status: getValues().status,
    };
    dispatch(updateBooking(dataEdited));
  };

  return (
    <section className='h-full w-full px-8 mt-8'>
      <TopSection title='Konfirmasi Booking' />
      <div className='w-full bg-white rounded-md p-8 shadow-md'>
        <form
          onChange={() => getValues().status}
          onSubmit={handleSubmit(handleEditBooking)}
          className='flex justify-between gap-60'
        >
          <div className='flex-1 space-y-8'>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='name'>
                Nama Pemesan
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='text'
                name='name'
                placeholder={dataToEdit.citizen_name}
                disabled
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='nik'>
                NIK
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='text'
                name='nik'
                placeholder={dataToEdit.nik}
                disabled
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='time'>
                Waktu
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='time'
                name='time'
                value={dataToEdit.start_time}
                disabled
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='date'>
                Tanggal
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='date'
                name='date'
                value={dataToEdit.date}
                disabled
              />
            </div>
          </div>
          <div className='flex-1 space-y-8'>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='Sesi Tersedia'>
                Dosis
              </label>
              <select
                disabled
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-3'
              >
                <option value='sesi1'>{dataToEdit.dosis}</option>
                <option value='sesi2'>Dosis 2</option>
                <option value='sesi3'>Booster</option>
              </select>
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='queue'>
                Antrian
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='number'
                name='queue'
                placeholder={dataToEdit.queue}
                disabled
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='status'>
                Status Booking
              </label>
              <select
                {...register('status', {
                  required: 'Status is required!',
                })}
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-3'
              >
                <option value='' disabled selected>
                  Pilih Status
                </option>
                <option value='process'>Proses</option>
                <option value='selesai'>Selesai</option>
                <option value='batal'>Batal</option>
              </select>
            </div>
            <div className='w-full flex justify-end '>
              <button
                className='mt-16 text-white bg-[#0057FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5'
                type='submit'
              >
                Edit Data
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditBooking;
