import React from "react";
import { useLoaderData } from "react-router-dom";

const AllSellers = () => {
  const Seller = useLoaderData();
  return (
    <div>
      <h1>sellers{Seller?.length}</h1>
    </div>
  );
};

export default AllSellers;
