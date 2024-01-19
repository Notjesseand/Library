"use client";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import {IoIosArrowBack} from 'react-icons/io'
import Sidebar from "./sidebar";
import Searchbar from "./searchbar";
const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggle = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    console.log("Dropdown:", dropdown);
  }, [dropdown]);

  return (
    <div className=" items-center flex justify-between">
      <div className="absolute sm:left-7 left-5 z-50">
        <Sidebar />
      </div>
      <Searchbar />
    </div>
  );
};

export default Header;
