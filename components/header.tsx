"use client";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggle = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    console.log("Dropdown:", dropdown);
  }, [dropdown]);

  return (
    <div className="">
      <FaBars
        onClick={toggle}
        className={`text-2xl mr-7 flex cursor-pointer ${
          dropdown ? "rotate-90" : ""
        }`}
      />

      <div className="px-5 backdrop-blur-3xl rounded-lg font-montserrat py-4 z-20  absolute pr-96 h-auto top-20 block space-y-5 transition-opacity">
        <p className="cursor-pointer hover:text-orange-600 mt-2 text-[currentColor]">
          Home{" "}
        </p>
        <p className="cursor-pointer hover:text-orange-600">Author</p>
        <p className="cursor-pointer hover:text-orange-600">Contact</p>
        <span className="cursor-pointer hover:text-orange-600 flex">
          <Link
            href="/signup"
            className="sm:font-medium font-normal hover:text-[#e4e4e4d3]"
          >
            Checkout
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
