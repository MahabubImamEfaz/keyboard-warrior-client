import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { useQuery } from "@tanstack/react-query";

const Categories = () => {
  // const [data, setData] = useState([]);

  const { data = [] } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch("http://localhost:5000/displaycategories").then((res) =>
        res.json()
      ),
  });
  // useEffect(() => {
  //   fetch("http://localhost:5000/displaycategories")
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <div className="mt-20 pb-10 ">
      <h1 className="text-3xl font-bold text-[#e9c46a] text-center mt-5 mb-10">
        Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
