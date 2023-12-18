import React from 'react'
import { IoBookSharp } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


export default function footer() {
  return (
    <div className="fixed bottom-0 h-14 w-full md:hidden flex z-20 px-5 justify-between">
      <FaSearch className=" text-3xl font-bold" />
      <IoBookSharp className=" text-3xl" />
      <FaStar className=" text-3xl" />
      <LuLibrary className=" text-3xl" />
      <IoPerson className=" text-3xl" />
    </div>
  );
}
