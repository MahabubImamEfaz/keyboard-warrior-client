import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllBuyers = () => {
  const buyers = useLoaderData();
  const [displayBuyers, setDisplayBuyers] = useState(buyers);
  const handleDelete = (id) => {
    fetch(`https://keyboard-warrior-server.vercel.app/deleteusers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingUsers = displayBuyers.filter((buy) => buy._id !== id);
          setDisplayBuyers(remainingUsers);
        }
      });
  };

  return (
    <div>
      <h1 className="mt-5 mb-5 mx-5 text-2xl font-semibold sm:text-4xl text-[#e9c46a]">
        All Buyers
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {displayBuyers.map((buyer, index) => (
              <tr key={buyer._id}>
                <th>{index + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>

                <td>
                  <button
                    onClick={() => handleDelete(buyer._id)}
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

export default AllBuyers;
