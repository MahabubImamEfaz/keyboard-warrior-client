import React from "react";
import { useLoaderData } from "react-router-dom";

const CategorizedProducts = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1>products: {products.length}</h1>
    </div>
  );
};

export default CategorizedProducts;
