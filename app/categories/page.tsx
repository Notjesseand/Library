"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { categories } from "../data";
import Link from "next/link";

export default function Page() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className="pb-12">
      <div className="pt-7 md:py-9 px-4 sm:px-20 flex justify-between">
        <Link href="/browse">
          <IoIosArrowBack className="text-4xl" />
        </Link>
        {open ? (
          <RxCross2
            onClick={toggle}
            className="text-3xl cursor-pointer hover:text-orange-600 hover:text-4xl transition-all duration-500 "
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
        <div className="absolute w-full  flex justify-center z-50 h-full backdrop-blur-lg">
          <div className="bg-white flex bg-transparent w-11/12 sm:w-3/5 mx-auto justify-center sm:mx-16 border-2 h-14 border-blue-900 rounded-full sm:px-1 mt-8">
            <input
              type="search"
              placeholder="Title, Author, or Keywords"
              className="placeholder:normal-case  lowercase outline-none  placeholder-gray-600 placeholder:text-base text-lg py-3 sm:px-4 sm:text-xl font-montserrat mx-auto w-full px-3 sm:w-full flex  border-none rounded-full cursor:black bg-white text-gray-800"
            />
            <div className="flex-col justify-center flex items-center rounded-lg pr-2">
              <IoSearchOutline
                className="text-3xl flex flex-col justify-center text-bold font-bold cursor-pointer hover:text-orange-600 text-black"
                // onClick={toggle}
              />
            </div>
          </div>
        </div>
      )}

      <div className="px-4 sm:px-20">
        <p className="text-3xl mt-6">Categories</p>

        <div className="grid sm:grid-cols-3 grid-cols-2 pt-5 gap-4 gap-y-8 md:gap-7">
          {categories.map((item, index) => (
            <div
            key={index}
              className="bg-pink-400 h-36   md:h-64   w-full rounded-lg flex flex-col justify-end bg-cover bg-center backdrop-blur-3xl relative cursor-pointer"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#6d6d6d] to-black opacity-50 rounded-lg"></div>
              <p className="font-montserrat text-xl capitalize md:px-10 py-5 px-5 md:py-7 z-20 text-white">
                {item.category}
              </p>
            </div>
          ))}
          {/* <div className="bg-pink-400 h-64   w-full rounded-lg flex flex-col justify-end">
            <p>jaja</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
