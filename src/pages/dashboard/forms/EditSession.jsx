import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TopSection from '../../../components/TopSection';
import { updateSession } from '../../../store/features/sessionSlice';
import { fetchVaccine } from '../../../store/features/vaccineSlice';

const EditSession = () => {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVaccine());
  }, [dispatch]);

  const dataVaccine = useSelector((state) => state.vaccine.data);
  const dataToEdit = useSelector((state) => state.session.dataID);

  const handleEditSession = () => {
    const dataEdited = {
      id: dataToEdit.session_id,
      name: getValues().name,
      vaccine_id: getValues().vaccine_id,
      startTime: getValues().startTime,
      kuota: getValues().kuota,
      dosis: getValues().dosis,
      endTime: getValues().endTime,
    };
    dispatch(updateSession(dataEdited));
  };

  return (
    <section className='h-full w-full px-8 mt-8'>
      <TopSection title='Edit Sesi' />
      <div className='w-full bg-white rounded-md p-8 shadow-md'>
        <form
          onChange={() => getValues()}
          onSubmit={handleSubmit(handleEditSession)}
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
                  required: 'Edit nama sesi terlebih dahulu!',
                })}
                placeholder={dataToEdit.name}
              />
              <p className='text-red-700'>{errors.name?.message}</p>
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='nik'>
                Tanggal
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='date'
                dateformat='yyyy/mm/dd'
                {...register('date')}
                disabled
                defaultValue={dataToEdit.date}
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='startTime'>
                Waktu Mulai
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='time'
                {...register('startTime', {
                  required: 'Edit waktu mulai terlebih dahulu',
                })}
                defaultValue={dataToEdit.startTime}
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
                  required: 'Edit waktu berakhir terlebih dahulu',
                })}
                defaultValue={dataToEdit.endTime}
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
                  required: 'Pilih jenis vaksin!',
                })}
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-3'
              >
                {dataVaccine.map((vaksin) => (
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
                  required: 'Edit kuota vaksin terlebih dahulu!',
                })}
                placeholder={dataToEdit.kuota}
              />
              <p className='text-red-700'>{errors.kuota?.message}</p>
            </div>
            <div className='flex-1 space-y-2'>
              <label className='text-xl' htmlFor='dosis'>
                Dosis
              </label>
              <select
                {...register('dosis', {
                  required: 'Pilih dosis terlebih dahulu!',
                })}
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-3'
              >
                <option value='pertama'>Pertama</option>
                <option value='kedua'>Kedua</option>
                <option value='ketiga'>Ketiga</option>
                <option value='keempat'>Keempat</option>
                <option value='booster'>Booster</option>
              </select>
              <p className='text-red-700'>{errors.dosis?.message}</p>
            </div>
            <div className='w-full flex justify-end '>
              <button
                className='mt-16 text-white bg-[#0057FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5'
                type='submit'
              >
                Konfirmasi
              </button>
            </div>
          </div>
        </form>
      </div>
      <br />
    </section>
  );
};

export default EditSession;
