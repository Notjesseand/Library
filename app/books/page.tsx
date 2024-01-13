"use client";
import React from "react";
import PDFViewer from "../../components/viewPdf";
import FeaturedBooksCarousel from "./featuredBooksCarousel";
import Sidebar from "@/components/sidebar";
import Searchbar from "@/components/searchbar";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "./footer";
export default function Page() {
  return (
    <div className="pt-6 pb-20">
      {/* search */}
      <div className=" items-center flex justify-between">
        <div className="absolute sm:left-7 left-5 z-50">
          <Sidebar />
        </div>
        <Searchbar />
      </div>
      <p className="text-3xl font-bold px-7 sm:px-10 pt-7 md:pt-10">Books</p>
      {/* popular books */}
      <div className="px-7 sm:px-10 pt-2 sm:pt-3 flex justify-between">
        <p className="text-lg">Popular Books</p>
        <p className="text-gray-500 flex items-center gap-1 hover:text-deep-orange-500 cursor-pointer">
          See All <MdOutlineArrowForwardIos />
        </p>
      </div>
      <FeaturedBooksCarousel />

      {/* books of the year */}
      <section className="px-7 sm:px-12 pt-8 relative">
        <div className="text-xl h-36  md:h-48 rounded-lg bg-[url('/image4.jpg')] bg-center relative flex items-center px-[10%]">
          <p className="z-20 flex relative text-3xl justify-between w-full cursor-pointer hover:text-deep-orange-500">Books of the year
          
          <FaArrowRightLong className="relative z-20"/>
          </p>
          <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
