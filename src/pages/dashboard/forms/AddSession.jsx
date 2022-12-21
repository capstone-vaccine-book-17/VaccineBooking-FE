import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TopSection from '../../../components/TopSection';
import { createSession } from '../../../store/features/sessionSlice';
import { fetchVaccine } from '../../../store/features/vaccineSlice';

const AddSession = () => {
  const dispatch = useDispatch();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(fetchVaccine());
  }, [dispatch]);

  const dataVaccine = useSelector((state) => state.vaccine.data);

  const handleAddSession = () => {
    dispatch(createSession(getValues()));
  };

  return (
    <section className='h-full w-full mt-8'>
      <TopSection title='Tambah Sesi' />
      <div className='w-full bg-white rounded-md p-8 shadow-md'>
        <form
          onChange={() => {
            getValues();
          }}
          onSubmit={handleSubmit(handleAddSession)}
          className='flex justify-between gap-60'
          action=''
        >
          <div className='flex-1 space-y-8'>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='name'>
                Nama Sesi
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                {...register('name', {
                  required: 'Nama sesi tidak boleh kosong!',
                })}
                placeholder='Masukkan Nama Sesi'
              />
              <p className='text-red-700'>{errors.name?.message}</p>
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='date'>
                Tanggal
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='date'
                dateformat='yyyy/mm/dd'
                {...register('date', {
                  required: 'Tanggal tidak boleh kosong!',
                })}
                placeholder=''
              />
              <p className='text-red-700'>{errors.date?.message}</p>
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='startTime'>
                Waktu Mulai
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='time'
                {...register('startTime', {
                  required: 'Waktu sesi dimulai tidak boleh kosong!',
                })}
                placeholder=''
              />
              <p className='text-red-700'>{errors.startTime?.message}</p>
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='endTime'>
                Waktu Berakhir
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='time'
                {...register('endTime', {
                  required: 'Waktu sesi berakhir tidak boleh kosong!',
                })}
                placeholder=''
              />
              <p className='text-red-700'>{errors.endTime?.message}</p>
            </div>
          </div>
          <div className='flex-1 space-y-8'>
            <div className='flex-1 space-y-2'>
              <label className='text-xl' htmlFor='vaccine_id'>
                Jenis Vaksin
              </label>
              <select
                {...register('vaccine_id', {
                  valueAsNumber: true,
                  required: 'Pilih jenis vaksin terlebih dahulu!',
                })}
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-3'
              >
                {dataVaccine?.map((vaksin) => (
                  <option key={vaksin.vaccine_id} value={vaksin.vaccine_id}>
                    {vaksin.name}({vaksin.expired})
                  </option>
                ))}
              </select>
              <p className='text-red-700'>{errors.vaccine_id?.message}</p>
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='kuota'>
                Kuota
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='number'
                {...register('kuota', {
                  valueAsNumber: true,
                  required: 'Kuota vaksin tidak boleh kosong!',
                })}
                placeholder='Masukkan Jumlah Kuota'
              />
              <p className='text-red-700'>{errors.kuota?.message}</p>
            </div>
            <div className='flex-1 space-y-2'>
              <label className='text-xl' htmlFor='dosis'>
                Dosis
              </label>
              <select
                {...register('dosis', {
                  required: 'Pilih dosis vaksin!',
                })}
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-3'
              >
                <option value='default' selected>
                  Pilih Dosis
                </option>
                <option value='Pertama'>Pertama</option>
                <option value='Kedua'>Kedua</option>
                <option value='Ketiga'>Ketiga</option>
                <option value='Booster'>Booster</option>
              </select>
              <p className='text-red-700'>{errors.dosis?.message}</p>
            </div>
            <div className='w-full flex justify-end '>
              <button
                className='mt-16 text-white bg-[#0057FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5'
                type='submit'
              >
                Tambah Data
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddSession;
