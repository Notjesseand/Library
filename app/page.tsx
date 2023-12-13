"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ModeToggle } from "@/components/toggle";
import { useTheme } from "next-themes";
import { GiBlackBook } from "react-icons/gi";
import Carousel from "@/components/carousel";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const lightOpacity = 0.5;
  const darkOpacity = 0.8;
  const opacity = theme === "dark" ? darkOpacity : lightOpacity;

  // Determine the background image based on the theme
  const backgroundImage = theme === "dark" ? "/image11.jpg" : "/image1.jpg";
  useEffect(() => {
    setTheme("system");
  }, []);
  return (
    <div
      className="h-screen relative bg-cover bg-center transition-all duration-700 font-custom"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#454f56] to-black"
        style={{ opacity: opacity }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* theme toggle */}
        <div className="flex justify-end px-3 sm:px-6 pt-1">
          <ModeToggle />
        </div>
        {/* icon and hero */}
        <div className="flex justify-center sm:justify-start  sm:px-24 mt-12">
          <GiBlackBook className="text-3xl sm:text-5xl " />{" "}
          <p className="px-3 text-3xl sm:text-5xl">Digital Library</p>
        </div>
        <div className="sm:w-full w-5/6 mx-auto sm:mx-0">
          <p className="sm:px-24 justify-left mx-auto flex sm:text-left mt-7 text-3xl sm:text-5xl font-bold">
            Discover books you love
          </p>
          <p className="sm:px-24 my-7 text-xl ">
            Find all the best books and academic materials for you
          </p>
        </div>

        <div className="px-4 mt-20">
          {/* carousel */}
          <Carousel />
          {/* <div className="sm:hidden">
            <MobileCarousel />
          </div>
          <div className="sm:flex hidden">
          </div> */}
        </div>
        <button className="bg-[#294246] px-32 sm:px-44 py-3.5  mx-auto flex rounded-md mt-20 hover:bg-slate-600 transition duration-500 ">
          next
        </button>
      </div>
    </div>
  );
}
