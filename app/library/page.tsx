"use client";
import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import Searchbar from "@/components/searchbar";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "./footer";
import { GoHeartFill } from "react-icons/go";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { favourites } from "../data";
export default function Page() {
  const [isLiked, setIsLiked] = useState(false);
  const toggle = () => {
    setIsLiked(!isLiked);
  };
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
        <div className="grid md:grid-cols-3 sm:grid-cols-2 pt-6 gap-x-5 gap-y-6">
          {/* card */}

          {favourites.map((item, index) => (
            <div
              key={index}
              className="h-[9rem] sm:h-48 border-[2.5px] border-[#527853] rounded-lg flex p-1 backdrop-blur-2xl cursor-pointer hover:bg-gray-100  transition-colors duration-400   "
            >
              {/* book image */}
              <img
                className="h-full w-24 sm:w-32 object-cover rounded"
                src={item.image}
                alt="Image"
              />
              {/* book name and author */}
              <div className="flex flex-grow justify-between items-center px-2">
                <div className="text-lg pl-2">
                  <p className="">{item.title}</p>
                  <p className="text-[15px]">{item.author}</p>
                </div>
                <div>
                  {isLiked ? (
                    <IoIosHeart
                      onClick={toggle}
                      className="text-3xl cursor-pointer mr-2 text-red-600"
                    />
                  ) : (
                    <IoIosHeartEmpty
                      onClick={toggle}
                      className="text-3xl cursor-pointer mr-2"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
