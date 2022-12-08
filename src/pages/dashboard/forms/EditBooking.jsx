import React from 'react';
import TopSection from '../../../components/TopSection';

const EditBooking = () => {
  return (
    <section className='h-full w-full px-8 mt-8'>
      <TopSection title='Konfirmasi Booking' />
      <div className='w-full bg-white rounded-md p-8 shadow-md'>
        <form className='flex justify-between gap-60' action=''>
          <div className='flex-1 space-y-8'>
            <div className='space-y-2'>
              <label className='text-xl' for='namaPemesan'>
                Nama Pemesan
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='text'
                name=''
                placeholder='Masukkan Nama Pemesan'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xl' for='nik'>
                NIK
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='text'
                name=''
                placeholder='Masukkan NIK Pemesan'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xl' for='nik'>
                Waktu
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='time'
                name=''
                placeholder='08.00-10.00'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xl' for='nik'>
                Tanggal
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='date'
                name=''
                placeholder='2022-10-17'
              />
            </div>
          </div>
          <div className='flex-1 space-y-8'>
            <div className='space-y-2'>
              <label className='text-xl' for='Sesi Tersedia'>
                Dosis
              </label>
              <select className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-3'>
                <option value='' disabled selected>
                  Pilih Dosis
                </option>
                <option value='sesi1'>Dosis 1</option>
                <option value='sesi2'>Dosis 2</option>
                <option value='sesi3'>Booster</option>
              </select>
            </div>
            <div className='space-y-2'>
              <label className='text-xl' for='nik'>
                Antrian
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='number'
                name=''
                placeholder='1'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xl' for='Sesi Tersedia'>
                Status Booking
              </label>
              <select className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-3'>
                <option value='' disabled selected>
                  Pilih Status
                </option>
                <option value='process'>Proses</option>
                <option value='selesai'>Selesai</option>
                <option value='batal'>Batal</option>
              </select>
            </div>
          </div>
        </form>
        <div className='w-full flex justify-end '>
          <button
            className='mt-16 text-white bg-[#0057FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5'
            type='submit'
          >
            Edit Data
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditBooking;
