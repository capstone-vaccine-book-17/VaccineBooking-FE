import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/Logo.png";
import { loginAdmin } from "../store/features/adminSlice";
import { useNavigate } from "react-router-dom";
import { authAdmin } from "../utils/authAdmin";

const LoginPage = () => {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin.data);
  const navigate = useNavigate();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = () => {
    dispatch(loginAdmin(getValues()));
  };

  useEffect(() => {
    if (admin !== null || undefined) {
      authAdmin.setLogin(admin);
      return navigate("/dashboard");
    } else {
      return navigate("/login");
    }
  }, [admin]);

  return (
    <section className="flex h-screen justify-center items-center p-40 px-60">
      <div className="flex w-full h-full rounded-xl drop-shadow-md bg-white">
        <div className="flex-[40%] flex flex-col gap-8 rounded-l-xl justify-center items-center bg-[#8BFAFF]">
          <img src={Logo} alt="" />
          <h1 className="font-bold text-black text-[32px]">
            <span className="text-[#56BE25]">WV</span>accine
          </h1>
          <p className="text-[#373737] text-2xl font-semibold">
            Tak Kenal Maka Tak Kebal
          </p>
        </div>
        <div className="flex-[60%] w-full px-40">
          <form
            onChange={() => getValues()}
            onSubmit={handleSubmit(handleLogin)}
            className="flex h-full flex-col justify-center items-center gap-y-2"
          >
            <h1 className="text-[40px] font-semibold mb-[32px]">Login Admin</h1>
            <div className="flex flex-col w-full">
              <label htmlFor="username">Username</label>
              <input
                placeholder="Masukkan Username"
                {...register("username", {
                  required: "Username is required!",
                })}
              />
              <p className="text-red-700">{errors.username?.message}</p>
            </div>
            <div className="flex flex-col w-full">
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Masukkan Password"
                {...register("password", {
                  required: "Password is required!",
                })}
              />
              <p className="text-red-700">{errors.password?.message}</p>
            </div>
            <button
              type="submit"
              className="w-full mt-8 py-2 bg-[#0057FF] rounded-lg text-xl text-white font-semibold"
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
