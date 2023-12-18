"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import BrowseCarousel from "@/components/browseCarousel";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Categories from "@/components/categoriesCarousel";
import Footer from "@/components/footer";
// import Header from "@/components/header";
import  Sidebar  from "@/components/sidebar";
import { RxCross2 } from "react-icons/rx";
export default function Page() {
  const [open, setOpen] = useState(false);
  const toggle =()=>{
    setOpen(!open)
    console.log(open)
  }
  return (
    <div className="relative pb-24">
      <div className="flex items-center justify-between pt-6 px-4 sm:px-16 relative">
        <div>
          <div className="block">
            <Sidebar />
          </div>
        </div>
        <p className="font-custom text-xl sm:text-3xl">Browse</p>
        {open ? (
          <RxCross2
            onClick={toggle}
            className="text-3xl cursor-pointer hover:text-orange-600 hover:text-4xl transition-all duration-500  "
          />
        ) : (
          <IoSearchOutline
            onClick={toggle}
            className="text-3xl cursor-pointer hover:text-orange-600 hover:text-4xl transition-all duration-500  "
          />
        )}
      </div>
      {/* searchbar */}
      {open && (
        <div className="absolute w-full mt-5 flex justify-center z-50 h-full backdrop-blur-lg">
          <div className="flex bg-transparent w-4/5 sm:w-3/5 mx-auto justify-center sm:mx-16 border-2 h-14 border-gray-500 rounded-full sm:px-1 mt-8">
            <input
              type="search"
              placeholder="Title, Author, or Keywords"
              className="placeholder:normal-case  lowercase outline-none  placeholder-gray-600 placeholder:text-base text-lg   py-3 sm:px-4 sm:text-xl font-open mx-auto w-full px-3 sm:w-full flex  border-none bg-transparent rounded-full cursor:black "
            />
            <div className="flex-col justify-center flex items-center rounded-lg pr-2">
              <RxCross2
                className="text-3xl flex flex-col justify-center text-bold font-bold cursor-pointer hover:text-orange-600"
                onClick={toggle}
              />
            </div>
          </div>
        </div>
      )}

      {/* end of searchbar */}
      <div className="px-5">
        <BrowseCarousel />
      </div>

      <div className="px-6 sm:px-16 justify-between flex pt-6">
        <p className="font-open text-xl">Categories</p>
        <p className="text-gray-400 font-open flex items-center text-lg cursor-pointer hover:text-orange-600">
          See more
          <MdOutlineArrowForwardIos className="text-lg ml-1 mt-[1px] flex" />
        </p>
      </div>
      <Categories />

      <div className="px-6 sm:px-16 justify-between flex pt-10">
        <p className="font-open text-xl">Popular Authors</p>
        <p className="text-gray-400 font-open flex items-center text-lg cursor-pointer hover:text-orange-600">
          See more
          <MdOutlineArrowForwardIos className="text-lg ml-1 mt-[1px] flex" />
        </p>
      </div>

      <Footer />
    </div>
  );
}
