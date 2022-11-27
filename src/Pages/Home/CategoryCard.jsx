import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { _id, brand_name, img } = category;
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="categories" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>

          <div className="card-actions justify-end">
            <Link to={`/category/${brand_name}`}>
              <button className="btn bg-[#e9c46a] text-black">
                View the Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
