"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { GiBlackBook } from "react-icons/gi";
import Carousel from "@/components/introCarousel";
import Link from "next/link";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const lightOpacity = 0.45;
  const darkOpacity = 0.75;
  const opacity = 0.7;

  // Determine the background image based on the theme
  const backgroundImage = "/image1.jpg";
  const backgroundImage2 = "/image3.jpg";
  const backgroundImage3 = "/image4.jpg";
  useEffect(() => {
    setTheme("system");
  }, []);

  const [showSection1, setShowSection1] = useState(true);
  const [showSection2, setShowSection2] = useState(false);
  const [showSection3, setShowSection3] = useState(false);

  const handleNext = () => {
    if (showSection1) {
      setShowSection1(false);
      setShowSection2(true);
    } else if (showSection2) {
      setShowSection2(false);
      setShowSection3(true);
    } else if (showSection3) {
      setShowSection3(false);
      setShowSection1(true);
    }
  };

  return (
    <>
      <div>
        {/* section 1 */}
        {showSection1 && (
          <div
            className="h-screen relative bg-cover bg-center transition-all duration-700 font-custom"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {/* Dark overlay */}

            <div
              className="absolute inset-0 bg-gradient-to-t from-[#131414] to-black"
              style={{ opacity: opacity }}
            ></div>
            <div className="relative z-10" id="section 1">
              {/* theme toggle */}

              {/* icon and hero */}
              <div className="flex justify-start  sm:px-24 pt-20 sm:w-full w-5/6 mx-auto sm:mx-0">
                <GiBlackBook className="text-3xl sm:text-5xl " />{" "}
                <p className="px-3 text-3xl sm:text-5xl">Digital Library</p>
              </div>
              <div className="sm:w-full w-5/6 mx-auto sm:mx-0">
                <p className="sm:px-24 justify-left mx-auto flex sm:text-left mt-7 text-4xl sm:text-5xl font-bold">
                  Discover books you love
                </p>
                <p className="sm:px-24 my-7 text-2xl font-custom">
                  Find all the best books and academic materials for you
                </p>
              </div>
              <div className="px-4 mt-20 flex">
                <Carousel />
              </div>
            </div>
          </div>
        )}
        {showSection2 && (
          <div
            className="h-screen relative bg-cover bg-top transition-all duration-700 font-custom"
            style={{ backgroundImage: `url(${backgroundImage2})` }}
          >
            {/* Dark overlay */}

            <div
              className="absolute inset-0 bg-gradient-to-t from-[#131414] to-black"
              style={{ opacity: opacity }}
            ></div>
            <div className="relative z-10" id="section 1">
              <div className="flex justify-start  sm:px-24 pt-20 sm:w-full w-5/6 mx-auto sm:mx-0">
                <GiBlackBook className="text-3xl sm:text-5xl " />{" "}
                <p className="px-3 text-3xl sm:text-5xl">Digital Library</p>
              </div>
              <div className="sm:w-full w-5/6 mx-auto sm:mx-0">
                <p className="sm:px-24 justify-left mx-auto flex sm:text-left mt-7 text-3xl sm:text-5xl font-bold">
                  Give and get recommendations
                </p>
                <p className="sm:px-24 my-7 text-2xl font-custom">
                  Give and get book recommendations from friends and more
                </p>
              </div>
              <div className="px-4 mt-20">
                <Carousel />
              </div>
            </div>
          </div>
        )}
        {showSection3 && (
          <div
            className="h-screen relative bg-cover bg-bottom transition-all duration-700 font-custom"
            style={{ backgroundImage: `url(${backgroundImage3})` }}
          >
            {/* Dark overlay */}

            <div
              className="absolute inset-0 bg-gradient-to-t from-[#131414] to-black"
              style={{ opacity: opacity }}
            ></div>
            <div className="relative z-10" id="section 1">
              <div className="flex justify-start  sm:px-24 pt-20 sm:w-full w-5/6 mx-auto sm:mx-0">
                <GiBlackBook className="text-3xl sm:text-5xl " />{" "}
                <p className="px-3 text-3xl sm:text-5xl">Digital Library</p>
              </div>
              <div className="sm:w-full w-5/6 mx-auto sm:mx-0">
                <p className="sm:px-24 justify-left mx-auto flex sm:text-left mt-7 text-3xl sm:text-5xl font-bold">
                  Get started now
                </p>
                <p className="sm:px-24 my-7 text-2xl font-custom">
                  Sign up for free to gain access to a wide collection of
                  resources
                </p>
              </div>
              <div className="px-4 mt-20">
                <Carousel />
              </div>
            </div>
          </div>
        )}
      </div>
      {(showSection1 || showSection2) && (
        <button
          onClick={handleNext}
          className=" font-custom text-white bg-[#294246] px-0 w-5/6 sm:w-auto text-center justify-center sm:px-44 py-4 rounded-md mt-20 hover:bg-slate-600 transition duration-500 z-50 mx-auto flex absolute left-1/2 transform -translate-x-1/2 bottom-5"
        >
          Next
        </button>
      )}
      {showSection3 && (
        <div className="flex">
          <Link
            href="/login"
            className="font-custom text-white bg-[#294246] px-0 w-5/6 sm:w-auto justify-center sm:px-44 py-4 rounded-md mt-20 hover:bg-slate-600 transition duration-500 z-50 mx-auto flex absolute bottom-5 left-1/2 transform -translate-x-1/2"
          >
            Sign Up
          </Link>
        </div>
      )}
    </>
  );
}
