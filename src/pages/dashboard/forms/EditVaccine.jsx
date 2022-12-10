import React from 'react';
import TopSection from '../../../components/TopSection';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateVaccine } from '../../../store/features/vaccineSlice';

const EditVaccine = () => {
  const { register, getValues, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const dataToEdit = useSelector((state) => state.vaccine.dataID);
  console.log(dataToEdit);

  const handleEditBooking = () => {
    const dataEdited = {
      id: dataToEdit.vaccine_id,
      name: getValues().name,
      kuota: getValues().kuota,
      expired: getValues().expired,
    };
    console.log(getValues());
    dispatch(updateVaccine(dataEdited));
  };

  return (
    <section className='h-full w-full px-8 mt-8'>
      <TopSection title='Edit Vaksin' />
      <div className='w-full bg-white rounded-md p-8 shadow-md'>
        <form
          onChange={() => getValues()}
          onClick={handleSubmit(handleEditBooking)}
          className='flex justify-between gap-60'
          action=''
        >
          <div className='flex-1 space-y-8'>
            <div className='space-y-2'>
              <label className='text-xl' htmlFor='name'>
                Jenis Vaksin
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                {...register('name', {
                  required: 'name is required!',
                })}
                placeholder={dataToEdit.name}
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xl' for='kuota'>
                Kuota
              </label>
              <input
                className='bg-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-3'
                type='number'
                {...register('kuota', {
                  valueAsNumber: true,
                  required: 'kuota is required!',
                })}
                placeholder={dataToEdit.kuota}
              />
            </div>
          </div>
          <div className='flex-1 flex flex-col '>
            <div className='flex-1 space-y-2'>
              <label className='text-xl' htmlFor='date'>
                Experied Time
              </label>
              <input
                type='date'
                dateformat='yyyy/mm/dd'
                {...register('expired', {
                  required: 'expired is required!',
                })}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
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
    </section>
  );
};

export default EditVaccine;
