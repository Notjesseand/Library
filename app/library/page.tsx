"use client";
import React from "react";
import Sidebar from "@/components/sidebar";
import Searchbar from "@/components/searchbar";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "./footer";
import { GoHeartFill } from "react-icons/go";
export default function Page() {
  return (
    <div className="pt-7 pb-20">
      {/* search */}
      <div className=" items-center flex justify-between">
        <div className="absolute sm:left-7 left-5 z-50">
          <Sidebar />
        </div>
        <Searchbar />
      </div>
      <section className=" px-7 md:px-10 pt-8">
        <p className="text-2xl md:text-3xl font-bold">My Library</p>
        {/* books */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 pt-6">
          <div className="h-48 bg-purple-100 rounded flex p-1 ">
            {/* book image */}
            <div className="h-full w-36 bg-[url('/drama.jpg')] bg-center bg-cover rounded "></div>
            {/* book name and author */}
            <div className="flex flex-grow justify-between items-center px-2 bg-purple-400">
              <div className="text-lg ">
                <p>Book Name</p>
                <p>Author</p>
              </div>

              <GoHeartFill />
            </div>
          

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
