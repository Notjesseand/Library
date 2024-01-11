import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsThreeOutlineLight } from "react-icons/pi";

export default function book() {
  return (
    <div>
      <div className="w-full bg-cover bg-center bg-[url('/philosophy.jpg')]">
        {/* blur */}
        <div className="backdrop-blur-2xl pb-6">
          {/* navigation */}
          <div className="grid grid-cols-3 text-center pt-4">
            <div className="sm:pl-10 pl-3">
              <IoIosArrowBack className="text-4xl cursor-pointer" />
            </div>
            <div className="text-2xl font-custom text-gray-300 ">
              The Rebublic
            </div>
            <div className="flex justify-end sm:pr-11 pr-3">
              <PiDotsThreeOutlineLight className="text-3xl cursor-pointer" />
            </div>
          </div>
          {/* Book Image  */}
          <div className="cursor-pointer flex mx-auto h-64 w-52 bg-center mt-4 rounded bg-[url('/philosophy.jpg')] bg-cover"></div>
          {/* Author */}
          <p className="text-2xl text-center mt-1">Plato</p>
        </div>
      </div>
      {/* end of header */}
      <div className="">
        {/* buttons */}
        <div className="pt-4 flex justify-center gap-3 ;sm:gap-10">
          <button className="text-lg px-12 py-3 rounded bg-[#527853] hover:bg-transparent border-2 border-[#527853]">
            Read{" "}
          </button>
          <button className="text-lg px-12 py-3 rounded hover:bg-[#527853] border-2 border-[#527853]">
            Add to Library{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
