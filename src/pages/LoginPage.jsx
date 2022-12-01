import React from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../assets/Logo.png';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = () => {
    console.log(errors.email?.message);
  };

  return (
    <section className='flex h-screen justify-center items-center p-40 px-60'>
      <div className='flex w-full h-full rounded-xl drop-shadow-md bg-white'>
        <div className='flex-[40%] flex flex-col gap-8 rounded-l-xl justify-center items-center bg-[#8BFAFF]'>
          <img src={Logo} alt='' />
          <h1 className='font-bold text-black text-[32px]'>
            <span className='text-[#56BE25]'>WV</span>accine
          </h1>
          <p className='text-[#373737] text-2xl font-semibold'>
            Tak Kenal Maka Tak Kebal
          </p>
        </div>
        <div className='flex-[60%] w-full px-40'>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className='flex h-full flex-col justify-center items-center gap-y-2'
          >
            <h1 className='text-[40px] font-semibold mb-[32px]'>Login Admin</h1>
            <div className='flex flex-col w-full'>
              <label htmlFor='email'>Email</label>
              <input
                placeholder='Masukkan Email'
                {...register('email', {
                  required: 'Email is required!',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Email not valid!',
                  },
                })}
              />
              <p className='text-red-700'>{errors.email?.message}</p>
            </div>
            <div className='flex flex-col w-full'>
              <label for='password'>Password</label>
              <input
                type='password'
                placeholder='Masukkan Password'
                {...register('password', {
                  required: 'Password is required!',
                })}
              />
              <p className='text-red-700'>{errors.password?.message}</p>
            </div>
            <button
              type='submit'
              className='w-full mt-8 py-2 bg-[#0057FF] rounded-lg text-xl text-white font-semibold'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
