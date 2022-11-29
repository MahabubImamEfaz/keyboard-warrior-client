import React from "react";

const ProductsCard = ({ product, setProduct }) => {
  const {
    _id,
    brand_name,
    product_name,
    image,
    location,
    original_price,
    resale_price,
    years_of_use,
    time,
    seller_name,
  } = product;
  return (
    <div className="mx-auto mb-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="categories" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_name}</h2>
          <p>
            <span className="font-semibold">Seller Name:</span> {seller_name}
          </p>
          <p>
            <span className="font-semibold">Brand Name:</span> {brand_name}
          </p>
          <p>
            <span className="font-semibold">Original Price:</span>{" "}
            {original_price}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Resale Price:</span> {resale_price}
          </p>
          <p>
            <span className="font-semibold">Years of use:</span> {years_of_use}
          </p>
          <p>
            <span className="font-semibold">Time:</span> {time}
          </p>

          <div className="card-actions justify-end">
            <label
              htmlFor="my-modal"
              onClick={() => setProduct(product)}
              className="btn bg-[#e9c46a] text-black"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
