import React from "react";
import { categories } from "@/app/data";

export default function PageById({ params }: { params: any }) {
  const categoriesWithId = categories.map((item, index) => ({
    ...item,
    id: item.category.toLowerCase().replace(/\s+/g, "_"),
  }));
  const filteredCategories = categoriesWithId.filter(
    (item) => item.id === params.id
  );

  const image = filteredCategories[0].image;

  return (
    <div>
      <p className="text-xl md:text-2xl text-center capitalize md:pt-8 pt-4 ">
        {filteredCategories[0].category}
      </p>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="flex mx-auto mt-3 rounded  h-[50vh] w-64 bg-center bg-cover"
      ></div>
    </div>
  );
}
