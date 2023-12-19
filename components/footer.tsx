import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function footer() {
  return (
    <div className="fixed bottom-0 h-16 w-full md:hidden flex justify-between items-center z-20 px-5 font-open bg-blur backdrop-blur-3xl pt-1">
      <div className="flex flex-col items-center">
        <FaSearch className="text-3xl font-bold" />
        <p className="text-sm text-gray-400 font-custom">Browse</p>
      </div>
      <div className="flex flex-col items-center">
        <Link href="/categories">
          <IoBookSharp className="text-3xl" />
          <p className="text-sm text-gray-400 font-custom">Books</p>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <FaStar className="text-3xl" />
        <p className="text-sm text-gray-400 font-custom">Favorites</p>
      </div>
      <div className="flex flex-col items-center">
        <LuLibrary className="text-3xl" />
        <p className="text-sm text-gray-400 font-custom">Library</p>
      </div>
      <div className="flex flex-col items-center">
        <IoPerson className="text-3xl" />
        <p className="text-sm text-gray-400 font-custom">Profile</p>
      </div>
    </div>
  );
}
