import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const AllSellers = () => {
  const Sellers = useLoaderData();
  const [displaySeller, setDisplaySeller] = useState(Sellers);

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`admin created successfully ${Sellers.name}`);
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteusers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingUsers = displaySeller.filter((buy) => buy._id !== id);
          setDisplaySeller(remainingUsers);
        }
      });
  };
  return (
    <div>
      <h1 className="mt-5 mb-5 mx-5 text-2xl font-semibold sm:text-4xl text-[#e9c46a]">
        all Sellers
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {displaySeller.map((seller, index) => (
              <tr key={seller._id}>
                <th>{index + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {seller?.rol !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(seller._id)}
                      className="btn btn-sm bg-green-600"
                    >
                      Admin
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn btn-sm bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
