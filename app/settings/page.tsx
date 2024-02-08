"use client";
import React from "react";
import Searchbar from "@/components/searchbar";
import { GrSettingsOption } from "react-icons/gr";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import { IoIosArrowForward } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { PiBellThin } from "react-icons/pi";
import { Switch } from "@/components/ui/switch";
import { PiSignOutLight } from "react-icons/pi";

export default function Page() {
  return (
    <div className="pt-9 sm:pt-11">
      {" "}
      {/* search */}
      <div className=" items-center flex justify-between w-full px-0">
        <div className="absolute sm:left-7 left-5 z-50">
          <Sidebar />
        </div>
        <Searchbar />
      </div>
      <div className=" pt-7 px-3 sm:px-9">
        <p className="text-xl md:text-2xl">Settings</p>
        <p className="text-lg mt-3 md:mt-4 font-semibold">Account</p>

        {/* settings */}
        <div className="w-full md:w-3/5 pt-1 space-y-1">
          {/* change password */}
          <div className="flex px-2  border-b-2 py-2.5 border-gray-700 cursor-pointer rounded-t hover:bg-gray-900 hover:text-white">
            <CiLock className="bg-gray-400 h-9 w-9   items-center flex rounded-lg mr-[5%] pb-1" />
            <p className="text-md flex items-center">Change Password</p>
            <div className="flex items-center justify-end text-end flex-grow">
              <IoIosArrowForward className="text-xl " />
            </div>
          </div>
          {/* notifications */}
          <div className="flex px-2  border-b-2 py-2.5 border-gray-700 rounded-t-sm cursor-pointer hover:bg-gray-900 hover:text-white">
            <PiBellThin className="bg-gray-400 h-9 w-9   items-center flex rounded-lg mr-[5%] pb-1" />
            <p className="text-md flex items-center">Manage Notifications</p>
            <div className="flex items-center justify-end text-end flex-grow">
              <IoIosArrowForward className="text-xl " />
            </div>
          </div>
          {/* sign out */}
          <div className="flex px-2 py-2.5 border-gray-700 rounded-t-sm cursor-pointer hover:bg-gray-900 hover:text-white">
            <PiSignOutLight className="bg-gray-400 h-9 w-9   items-center flex rounded-lg mr-[5%] pb-1" />
            <p className="text-md flex items-center">Sign Out</p>
            <div className="flex items-center justify-end text-end flex-grow">
              <IoIosArrowForward className="text-xl " />
            </div>
          </div>

          <p className="text-lg md:pt-7 font-semibold pt-5 flex">
            More Options
          </p>
          {/* Newsletter */}
          <div className="flex px-2  border-b-2 py-2.5 border-gray-700 cursor-pointer rounded-t hover:bg-gray-900 hover:text-white justify-between">
            <p className="text-md flex items-center">Newsletter</p>

            <Switch />
          </div>
          {/* languages */}
          <div className="flex px-2 py-2.5 border-gray-700 rounded-t-sm cursor-pointer hover:bg-gray-900 hover:text-white">
            <p className="text-md flex items-center">Languages</p>
            <div className="flex items-center justify-end text-end flex-grow">
              <p className="text-gray-700">English</p>
              <IoIosArrowForward className="text-xl ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
