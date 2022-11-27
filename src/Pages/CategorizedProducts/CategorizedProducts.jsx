import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";

import ProductsCard from "./ProductsCard";

const CategorizedProducts = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState(null);
  return (
    <div>
      <h1 className="text-3xl font-bold mt-10 text-[#e9c46a] text-center mb-10">
        {" "}
        This Category has {products.length} products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductsCard
            key={product._id}
            setProduct={setProduct}
            product={product}
          ></ProductsCard>
        ))}
      </div>
      {product && (
        <BookingModal product={product} setProduct={setProduct}></BookingModal>
      )}
    </div>
  );
};

export default CategorizedProducts;
