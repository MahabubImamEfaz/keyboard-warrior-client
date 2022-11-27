import { Result } from "postcss";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [data, setData] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = (data) => {
    setLoginError("");
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-[700px] flex justify-center items-center">
      <div className="w-96 p-7">
        <p className=" text-center text-3xl text-center text-[#e9c46a] font-bold mb-5">
          Login
        </p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-[#e9c46a] font-bold">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
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
                required: "Password is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn bg-[#e9c46a] w-1/2 mt-3 text-black"
            type="submit"
          />{" "}
          <div>
            {loginError && <p className="text-red-500">{loginError}</p>}
          </div>
        </form>
        <p className="text-white">
          New to Keyboard Warrior?{" "}
          <Link className="text-[#e9c46a]" to="/signup">
            Create new Account
          </Link>
        </p>
        <div className="divider text-[#e9c46a]">OR</div>
        <button className="btn bg-[#e9c46a] w-full text-black">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
