"use client";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import BrowseCarousel from "@/components/browseCarousel";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Categories from "@/components/categoriesCarousel";

export default function Page() {
  return (
    <div className="relative pb-24">
      <div className="flex items-center justify-between pt-6 px-4 sm:px-16">
        <div></div>
        <p className="font-custom text-xl sm:text-3xl">Browse</p>
        <IoSearchOutline className="text-3xl cursor-pointer hover:text-orange-600 hover:text-4xl transition-all duration-500  " />
      </div>

      <BrowseCarousel />

      <div className="px-16 justify-between flex pt-6">
        <p className="font-open text-xl">Categories</p>
        <p className="text-gray-400 font-open flex items-center text-lg cursor-pointer hover:text-orange-600">
          See more
          <MdOutlineArrowForwardIos className="text-lg ml-1 mt-[1px] flex" />
        </p>
      </div>
      <Categories />

      <div className="px-16 justify-between flex pt-10">
        <p className="font-open text-xl">Popular Authors</p>
        <p className="text-gray-400 font-open flex items-center text-lg cursor-pointer hover:text-orange-600">
          See more
          <MdOutlineArrowForwardIos className="text-lg ml-1 mt-[1px] flex" />
        </p>
      </div>

      <div className="fixed bottom-0 h-12 bg-gray-300 w-full md:hidden flex z-20">
        uoov
      </div>
    </div>
  );
}
