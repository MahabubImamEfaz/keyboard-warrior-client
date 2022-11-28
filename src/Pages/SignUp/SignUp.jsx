import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const googleAuth = new GoogleAuthProvider();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, providerLogin } = useContext(AuthContext);
  const [SignUpError, setSignUpError] = useState("");
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }

  const handleGoogleSignIn = () => {
    providerLogin(googleAuth)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully");
        console.log(data.name);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo);
        saveUser(data.name, data.email, data.role);
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        setCreateUserEmail(email);
      });
  };

  return (
    <div className="h-[700px] flex justify-center items-center">
      <div className="w-96 p-7">
        <p className=" text-center text-3xl text-center text-[#e9c46a] font-bold mb-5">
          Sign Up
        </p>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-[#e9c46a] font-bold">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-[#e9c46a] font-bold">
                Select
              </span>
            </label>
            <select
              {...register("role", {
                required: "name is required",
              })}
              className="select select-bordered w-full max-w-xs"
            >
              <option>Buyer</option>
              <option>Seller</option>
            </select>
            {errors.role && (
              <p className="text-red-600">{errors.role?.message}</p>
            )}
          </div>
          {/* ??? */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-[#e9c46a] font-bold">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "email is required",
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
          />
          {SignUpError && <p className="text-red-500">{SignUpError}</p>}
          <p className="text-white">
            Already have an account?{" "}
            <Link className="text-[#e9c46a]" to="/login">
              Login
            </Link>
          </p>
          <div className="divider text-[#e9c46a]">OR</div>{" "}
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-[#e9c46a] w-full text-black"
          >
            CONTINUE WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
