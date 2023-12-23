import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function footer() {
  return (
    <div className="fixed bottom-0 h-16 w-full md:hidden z-20 px-2 font-open backdrop-blur-3xl     pt-2 grid grid-cols-5">
      <div className="flex flex-col items-center">
        <FaSearch className="text-3xl font-bold" />
        <p className="text-[12px] text-gray-400 font-custom">Browse</p>
      </div>
        <Link href="/categories">
      <div className="flex flex-col items-center">
          <IoBookSharp className="text-3xl" />
          <p className="text-[12px] text-gray-400 font-custom">Categories</p>
      </div>
        </Link>
        <Link href="/favourites">
      <div className="flex flex-col items-center">
          <FaStar className="text-3xl" />
          <p className="text-[12px] text-gray-400 font-custom">Faves</p>
      </div>
        </Link>
      {/* <div className="flex flex-col items-center">
        <Link href="/favourites">
          <FaStar className="text-3xl" />
          <p className="text-[12px] text-gray-400 font-custom">Favorites</p>
        </Link>
      </div> */}
      <div className="flex flex-col items-center">
        <LuLibrary className="text-3xl" />
        <p className="text-[12px] text-gray-400 font-custom">Library</p>
      </div>
      <div className="flex flex-col items-center">
        <IoPerson className="text-3xl" />
        <p className="text-[12px] text-gray-400 font-custom">Profile</p>
      </div>
    </div>
  );
}
