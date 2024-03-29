"use client";
import React from "react";
import Footer from "./footer";
import { GrSettingsOption } from "react-icons/gr";
import Searchbar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import FeaturedBooksCarousel from "@/components/featuredBooksCarousel";
import Link from "next/link";
export default function Page() {
  return (
    <div className="pb-20">
      <section>
        <div className="items-center flex justify-between pt-7 px-2 sm:px-9">
          <Sidebar />
          <Link href="/settings" className="">
          <GrSettingsOption className="text-3xl cursor-pointer hover:rotate-90 transition-all duration-500 mr-4 " />
          </Link>
        </div>
        {/* profile*/}
        <div className="flex pt-7 px-7 md:px-16 items-center">
          {/* profile image */}
          <div className="h-16 md:h-32 aspect-square cursor-pointer rounded-full bg-pink-500 " />
          <div className="px-5">
            <p className="text-[17px] sm:text-xl">Jesse Nnorom</p>
            <p className="text-base text-gray-400">jessennorom@gmail.com</p>
          </div>
        </div>
        {/* stats */}
        <div className="flex pt-7 px-4 md:px-16 md:w-1/2 justify-evenly ">
          <div className="">
            <p className="text-lg pr-5">
              <span className="font-bold pr-1">0</span> Bookmarks{" "}
            </p>
          </div>

          <div className="">
            <p className="text-lg pr-5">
              <span className="font-bold pr-1">0</span> Following{" "}
            </p>
          </div>

          <p className="text-lg pr-5">
            <span className="font-bold pr-1 md:inline flex">0</span> Finished
            books{" "}
          </p>
        </div>
      </section>
      {/* favourite genres */}
      <section className="md:px-20 px-0">
        <p className="font-bold text-2xl pt-5 px-3">Favourite Genres</p>
        <div className="pt-3 space-y-1.5">
          {[
            "Thrillers",
            "History",
            "Fiction",
            "Romance",
            "Engineering",
            "Law",
            "Wars",
          ].map((item, index) => (
            <button
              key={index}
              className="py-1 md:py-1.5 mx-1 md:mx-3 px-3 rounded-full border-2 hover:border-[#527853]"
            >
              {item}
            </button>
          ))}
        </div>

        {/* favourites */}
        <div className="flex justify-between pr-3">
          <p className="font-bold text-2xl pt-5 px-3">Favourites</p>
          <p className="flex items-center cursor-pointer hover:text-deep-purple-900  ">
            see more
            <MdOutlineArrowForwardIos className="text-xl" />
          </p>
        </div>
          <FeaturedBooksCarousel />
      </section>
      <Footer />
    </div>
  );
}
