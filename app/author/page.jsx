import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi"

export default function Page() {
  return (
    <div className="pb-20">
      <div className="flex-shrink-0 pb-8 relative bg-[url(/image2.jpg)] bg-cover sm:bg-contain bg-top ">
        {/* overlay */}
        <div className="opacity-70 absolute inset-0 bg-gradient-to-b from-[#282a2a] to-black h-full m-0 p-0"></div>
        <div className="z-10 relative px-0 sm:px-12 py-10 sm:py-0 text-white">
          {/* navigation */}
          <div className="pt-7 md:pt-9 px-4 sm:px-0 flex justify-between">
            <Link href="/browse">
              <IoIosArrowBack className="text-4xl" />
            </Link>
            {/* {open ? ( */}
            <PiDotsThreeOutlineVerticalLight
              // onClick={toggle}
              className="text-3xl cursor-pointer hover:text-orange-600 transition-all duration-500 "
            />
            {/* ) : ( */}
            {/* <IoSearchOutline
                onClick={toggle}
                className="text-3xl cursor-pointer hover:text-orange-600 hover:text-4xl transition-all duration-500  "
              /> */}
            {/* )} */}
          </div>
          {/* profile */}
          <div className="flex items-center justify-center">
            <img
              src="profile.jpg"
              className="h-44 rounded-full aspect-square mx-4"
            />{" "}
          </div>
          {/* name and followers */}
          <div className=" justify-center text-center">
            <p className="text-center mt-1 text-lg">Amanda Lockwood</p>
            <p className="cursor-pointer hover:text-deep-orange-500  inline-block">
              0 books
            </p>
            <p className="text-center">2 Followers</p>
            <button className="flex mx-auto px-12 rounded border-white py-1.5 border-[1.4px] mt-4 hover:bg-black hover:border-deep-orange-500 ">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-12 ">
        {/* genres */}
        <p className="z-10 relative font-semibold m-3">Genres</p>
        <div className="space-y-3">
          {["Fiction", "Science Fiction", "Mystery", "Horror", "Romance"].map(
            (item, index) => (
              <div
                key={index}
                className="inline-block border-2 rounded-3xl  px-5 py-1.5 mr-2 sm:mr-5 hover:border-deep-orange-500 cursor-pointer"
              >
                {item}
              </div>
            )
          )}
        </div>
        {/* about */}
        <p className="z-10 relative font-semibold mb-1 mt-8 md:mt-16">About </p>
        <p>
          Amanda is an American writer, best known for her romantic novels.
          She&apos;s the bestselling photo alive and the 4th bestselling fiction
          author of all time, with over 800 million copies sold. She has written
          over 200 books...{" "}
        </p>
        {/* books */}
        <section>
          <p className="z-10 relative font-semibold mb-1 mt-8 md:mt-16">
            Books{" "}
          </p>
        </section>
      </div>
    </div>
  );
}
