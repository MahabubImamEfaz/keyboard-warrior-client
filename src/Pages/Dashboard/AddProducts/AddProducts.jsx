import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const imageHostKey = process.env.REACT_APP_Imgbb_key;
  console.log(imageHostKey);

  const handleAddProducts = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const products = {
            brand_name: data.category,
            product_name: data.ProductName,
            image: imgData.data.url,
            location: data.Location,
            original_price: data.OriginalPrice,
            resale_price: data.ResalePrice,
            years_of_use: data.Yearsofuse,
            time: data.Time,
            seller_name: data.sellername,
            email: data.email,
          };
          console.log(products);
          fetch("https://keyboard-warrior-server.vercel.app/addproducts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              //   authorization: `Bearer ${localStorage.setItem("accessToken")}`,
            },
            body: JSON.stringify(products),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("added product successfully");
              navigate(`/dashboard/myproducts/${user?.email}`);
            });
        }
      });
  };
  return (
    <div>
      <h1 className="mt-5 mb-5 mx-5 text-2xl font-semibold sm:text-4xl text-[#e9c46a]">
        Add Products
      </h1>
      <div className="h-[700px] flex justify-center items-center">
        <div className="w-96 p-7">
          <p className=" text-center text-3xl text-center text-[#e9c46a] font-bold mb-5">
            Add Products
          </p>
          <form onSubmit={handleSubmit(handleAddProducts)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-black font-bold">
                  Seller Name
                </span>
              </label>
              <input
                type="text"
                {...register("sellername", {
                  required: "field is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.sellername && (
                <p className="text-red-600">{errors.sellername?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-black font-bold">Email</span>
              </label>
              <input
                type="text"
                value={user?.email}
                {...register("email", {
                  required: "field is required",
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
                <span className="label-text text-black font-bold">
                  Product Name
                </span>
              </label>
              <input
                type="text"
                {...register("ProductName", {
                  required: "field is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.ProductName && (
                <p className="text-red-600">{errors.ProductName?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text--black font-bold">Select</span>
              </label>
              <select
                {...register("category", {
                  required: "field  is required",
                })}
                className="select select-bordered w-full max-w-xs"
              >
                <option>Razor</option>
                <option>MeelGeeks</option>
                <option>Corsair</option>
              </select>
              {errors.category && (
                <p className="text-red-600">{errors.category?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-black font-bold">
                  Original Price
                </span>
              </label>
              <input
                type="text"
                {...register("OriginalPrice", {
                  required: "field is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.OriginalPrice && (
                <p className="text-red-600">{errors.OriginalPrice?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-black font-bold">
                  Location
                </span>
              </label>
              <input
                type="text"
                {...register("Location", {
                  required: "field is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.Location && (
                <p className="text-red-600">{errors.Location?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-black font-bold">
                  Resale Price
                </span>
              </label>
              <input
                type="text"
                {...register("ResalePrice", {
                  required: "field is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.ResalePrice && (
                <p className="text-red-600">{errors.ResalePrice?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-black font-bold">
                  Years of use
                </span>
              </label>
              <input
                type="text"
                {...register("Yearsofuse", {
                  required: "field is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.Yearsofuse && (
                <p className="text-red-600">{errors.Yearsofuse?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-black font-bold">Time</span>
              </label>
              <input
                type="text"
                {...register("Time", {
                  required: "field is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.Time && (
                <p className="text-red-600">{errors.Time?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-black font-bold">
                  Upload Image
                </span>
              </label>
              <input
                type="file"
                {...register("image", {
                  required: "field is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.image && (
                <p className="text-red-600">{errors.image?.message}</p>
              )}
            </div>

            <input
              className="btn bg-[#e9c46a] w-1/2 mt-3 text-black"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
