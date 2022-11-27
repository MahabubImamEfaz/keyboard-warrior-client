import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="h-[700px] flex justify-center items-center">
      <div className="w-96 p-7">
        <p className="text-3xl text-center text-[#e9c46a] font-bold mb-5">
          Login
        </p>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-[#e9c46a] font-bold">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-[#e9c46a] font-bold">
                Password
              </span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <input
            className="btn bg-[#e9c46a] w-1/2 mt-3 text-black"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
