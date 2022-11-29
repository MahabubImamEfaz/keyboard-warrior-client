import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/mybookings?email=${user?.email}`;

  const { data: mybookings = [] } = useQuery({
    queryKey: ["mybookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="mt-5 mb-5 mx-5 text-2xl font-semibold sm:text-4xl text-[#e9c46a]">
        My Bookings
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>phone number</th>
              <th>Product Name</th>
            </tr>
          </thead>
          <tbody>
            {mybookings.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.phoneNumber}</td>
                <td>{order.productName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
