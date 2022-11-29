import React from "react";
import { useLoaderData } from "react-router-dom";

const AllBuyers = () => {
  const buyers = useLoaderData();
  return (
    <div>
      <h1>all buyers{buyers.length}</h1>
    </div>
  );
};

export default AllBuyers;
