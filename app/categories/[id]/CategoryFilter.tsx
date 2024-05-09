"use client";
import { categories } from "@/app/data";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import { favourites } from "@/app/data";
import { useToast } from "@/components/ui/use-toast";
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import React from "react";

const CategoryFilter = ({ categoryId, data }: any) => {
  const categoriesWithId = categories.map((item, index) => ({
    ...item,
    id: item.category.toLowerCase().replace(/\s+/g, "_"),
  }));
  const filteredCategories = categoriesWithId.filter(
    (item) => item.id === categoryId
  );
  console.log(data);
  const image = filteredCategories[0].image;
  console.log(filteredCategories);
  return (
    <div>
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* blur */}
        <div className="backdrop-blur-2xl pb-6">
          {/* navigation */}
          <div className="text-center flex justify-between pt-5 md:pt-9 ">
            <div className="sm:pl-10 pl-3">
              <Link href="/browse">
                <IoIosArrowBack className="text-4xl cursor-pointer" />
              </Link>
            </div>
            {/* <div className="text-2xl font-custom pt-10">
              {filteredFavourites[0].title}{" "}
            </div> */}
            <div className="flex justify-end sm:pr-11 pr-4">
              <Sidebar />
            </div>
          </div>
          <div className="text-2xl font-custom pt-10 px-5 text-center">
            {filteredCategories[0].category}{" "}
          </div>

          {/* Book Image  */}
          <div
            className="cursor-pointer flex mx-auto h-64 w-52 bg-center mt-4 rounded bg-cover"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          {/* Author */}
          {/* <p className="text-2xl text-center mt-1"> {author} </p> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
