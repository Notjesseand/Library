"use client"
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import AuthorsCarousel from "./authorsCarousel";
import Footer from "@/components/footer";


export default function Page() {
  return (
    <div>
      <p></p>
      {/* searchbar */}
      <div className="flex bg-transparent w-11/12 sm:w-2/5 mx-auto sm:justify-start justify-center sm:mx-16 border-2    border-gray-500 rounded-full sm:px-1 mt-9 md:mt-12">
        <input
          type="search"
          placeholder="search"
          // onChange={(e) => setSearchQuery(e.target.value)}
          className="placeholder:normal-case  lowercase outline-none  placeholder-gray-600 placeholder:text-base text-lg  py-2.5 sm:py-3 sm:px-3 sm:text-xl font-open  mx-auto w-full px-5 sm:w-full flex  border-none bg-transparent rounded-full cursor:black "
        />
        <div className="flex-col justify-center flex items-center rounded-lg pr-2">
          <IoSearchOutline className="text-3xl flex flex-col justify-center text-bold font-bold" />
        </div>
      </div>
      {/* end of searchbar */}
      <div className="px-8 md:px-14 pt-5">

      <p className="font-montserrate text-2xl font-semibold mt-5">Authors</p>
      {/* <AuthorsCarousel/> */}
      <AuthorsCarousel/>
      </div>
      <Footer/>

    </div>
  );
}
