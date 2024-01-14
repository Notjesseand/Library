import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function footer() {
  return (
    <div className="fixed bottom-0 h-16 w-full md:hidden z-20 px-2 font-open backdrop-blur-3xl     pt-2.5  grid grid-cols-4">
      <Link href="/browse" className="flex flex-col items-center text-deep-orange-500">
        <FaSearch className="text-3xl font-bold" />
        <p className="text-[12px] font-custom">Browse</p>
      </Link>
      <Link href="/books">
        <div className="flex flex-col items-center">
          <IoBookSharp className="text-3xl" />
          <p className="text-[12px] font-custom">Books</p>
        </div>
      </Link>
      <Link href="library">
        <div className="flex flex-col items-center">
          <LuLibrary className="text-3xl" />
          <p className="text-[12px] font-custom">Library</p>
        </div>
      </Link>
      <Link href="/profile" className="flex flex-col items-center">
        <IoPerson className="text-3xl" />
        <p className="text-[12px] font-custom">Profile</p>
      </Link>
    </div>
  );
}
