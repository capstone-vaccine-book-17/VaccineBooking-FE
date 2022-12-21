import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateProfile } from '../../store/features/profileSlice';
import { useForm } from 'react-hook-form';
import TopSection from '../../components/TopSection';
import LoaderData from '../../components/LoaderData';
import EditImage from '../../assets/editimage.png';

const AdminProfile = () => {
  const dataProfile = useSelector((state) => state.profile.data);
  const load = useSelector((state) => state.profile.loading);
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleChangeDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  const handleEditProfile = () => {
    const profileEdited = {
      name: getValues().name,
      address: getValues().address,
      responsible_person: getValues().responsible_person,
      username: getValues().username,
      password: getValues().password,
      new_password: getValues().new_password,
    };
    console.log(profileEdited);
    dispatch(updateProfile(profileEdited));
  };

  return (
    <section className='h-full w-full px-8 mt-8'>
      <TopSection title='Profile Admin' />
      {load ? (
        <div className='w-full flex justify-center'>
          <LoaderData />
        </div>
      ) : (
        <div className='w-full rounded bg-white shadow-md'>
          <div className='relative bg-[#888888] rounded-t-md'>
            <h1 className='absolute z-10 text-[40px] text-white font-semibold px-[32px] py-10'>
              {dataProfile.name}
            </h1>
            <div className='absolute z-10 px-[32px] py-2 bottom-0 right-0'>
              <img
                className='object-cover opacity-70 w-full h-[60px] rounded-t-md'
                src={EditImage}
                alt='img-admin'
              />
            </div>
            <img
              className='object-cover opacity-70 w-full h-[306px] rounded-t-md'
              src={dataProfile.image}
              alt='img-admin'
            />
          </div>
          <div className='px-10 pt-8 pb-10 space-y-6'>
            <form
              onChange={() => getValues()}
              onSubmit={handleSubmit(handleEditProfile)}
              className='space-y-10'
            >
              <div className='flex flex-col gap-4'>
                <div className='text-[24px] font-semibold border-b-2 border-[#050505]'>
                  Data Fasilitas Kesehatan
                </div>
                <div className='flex flex-col border-b-2 border-[#050505] pb-2'>
                  <label className='text-[16px] font-normal' htmlFor='name'>
                    Nama Fasilitias Kesehatan
                  </label>
                  <input
                    className={`text-[20px] border-none bg-white ${
                      !isDisabled ? 'text-[#050505]' : 'text-[#646464]'
                    }`}
                    type='text'
                    disabled={isDisabled}
                    placeholder={dataProfile.name}
                    {...register('name')}
                  />
                </div>
                <div className='flex flex-col border-b-2 border-[#050505] pb-2'>
                  <label className='text-[16px] font-normal' htmlFor='address'>
                    Alamat Fasilitias Kesehatan
                  </label>
                  <input
                    className={`text-[20px] border-none bg-white ${
                      !isDisabled ? 'text-[#050505]' : 'text-[#646464]'
                    }`}
                    type='text'
                    disabled={isDisabled}
                    placeholder={dataProfile.address}
                    {...register('address')}
                  />
                </div>
                <div className='flex flex-col border-b-2 border-[#050505] pb-2'>
                  <label
                    className='text-[16px] font-normal'
                    htmlFor='responsible_person'
                  >
                    Penanggung Jawab Fasilitias Kesehatan
                  </label>
                  <input
                    className={`text-[20px] border-none bg-white ${
                      !isDisabled ? 'text-[#050505]' : 'text-[#646464]'
                    }`}
                    type='text'
                    disabled={isDisabled}
                    placeholder={dataProfile.responsible_person}
                    {...register('responsible_person')}
                  />
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='text-[24px] font-semibold border-b-2 border-[#050505]'>
                  Data Akun
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-[16px] font-normal' htmlFor='username'>
                    Username
                  </label>
                  <input
                    className={`text-[20px] ${
                      !isDisabled ? 'text-[#050505]' : 'text-[#646464]'
                    }`}
                    type='text'
                    disabled={isDisabled}
                    placeholder={dataProfile.username}
                    {...register('username')}
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-[16px] font-normal' htmlFor='password'>
                    {isDisabled ? 'Password' : 'Recent Password'}
                  </label>
                  <input
                    className={`text-[20px] ${
                      !isDisabled ? 'text-[#050505]' : 'text-[#646464]'
                    }`}
                    type='password'
                    disabled={isDisabled}
                    placeholder='********'
                    {...register('password')}
                  />
                </div>
                <div className={isDisabled ? 'hidden' : 'flex flex-col gap-2'}>
                  <label htmlFor='new_password'>New Password</label>
                  <input
                    className={`text-[20px] ${
                      !isDisabled ? 'text-[#050505]' : 'text-[#646464]'
                    }`}
                    type='password'
                    disabled={isDisabled}
                    placeholder='********'
                    {...register('new_password', {
                      required: 'Masukkan password baru terlebih dahulu!',
                    })}
                  />
                  <p className='text-red-700'>{errors.new_password?.message}</p>
                </div>
              </div>
              <button
                type='submit'
                onClick={handleChangeDisabled}
                className={
                  isDisabled
                    ? 'hidden'
                    : 'w-full text-[#3366FF] bg-white border-2 border-[#3366FF] hover:bg-[#3366FF] hover:text-white px-4 py-[16px] text-[24px] font-normal rounded-lg'
                }
              >
                Konfirmasi Edit
              </button>
            </form>
            <button
              onClick={handleChangeDisabled}
              className='w-full bg-[#3366FF] px-4 py-[16px] text-[24px] text-white font-normal rounded-lg'
            >
              {isDisabled ? 'Edit' : 'Exit'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminProfile;
