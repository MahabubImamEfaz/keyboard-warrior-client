import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyProducts = () => {
  const products = useLoaderData();
  const [displayProdcuts, setDisplayProducts] = useState(products);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteproducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingUsers = displayProdcuts.filter(
            (buy) => buy._id !== id
          );
          setDisplayProducts(remainingUsers);
        }
      });
  };
  return (
    <div>
      <h1 className="mt-5 mb-5 mx-5 text-2xl font-semibold sm:text-4xl text-[#e9c46a]">
        My Products
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Resale Price</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {displayProdcuts.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.product_name}</td>
                <td>{product.brand_name}</td>
                <td>{product.resale_price}</td>
                <td>
                  <button className="btn btn-sm bg-blue-600">Advertise</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
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

export default MyProducts;
