"use client";
import React from "react";
import Searchbar from "@/components/searchbar";
import { GrSettingsOption } from "react-icons/gr";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import { IoIosArrowForward } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { PiBellThin } from "react-icons/pi";
import { PiSignOutFill } from "react-icons/pi";
import { Switch } from "@/components/ui/switch";

export default function Page() {
  return (
    <div>
      {" "}
      <div className="items-center flex justify-between pt-7 px-2 sm:px-9">
        <Link href="/settings" className="">
          <Sidebar />
        </Link>
        <Searchbar />
      </div>
      <div className=" pt-7 px-3 sm:px-9">
        <p className="text-2xl md:text-4xl">Settings</p>
        <p className="text-xl mt-3 md:mt-4 font-semibold">Account</p>

        {/* settings */}
        <div className="w-full md:w-3/5 pt-1 space-y-1">
          {/* change password */}
          <div className="flex px-2  border-b-2 py-2.5 border-gray-700 cursor-pointer rounded-t hover:bg-gray-900 hover:text-white">
            <CiLock className="bg-gray-400 h-9 w-9   items-center flex rounded-lg mr-[5%] pb-1" />
            <p className="text-xl flex items-center">Change Password</p>
            <div className="flex items-center justify-end text-end flex-grow">
              <IoIosArrowForward className="text-2xl " />
            </div>
          </div>
          {/* notifications */}
          <div className="flex px-2  border-b-2 py-2.5 border-gray-700 rounded-t-sm cursor-pointer hover:bg-gray-900 hover:text-white">
            <PiBellThin className="bg-gray-400 h-9 w-9   items-center flex rounded-lg mr-[5%] pb-1" />
            <p className="text-xl flex items-center">Manage Notifications</p>
            <div className="flex items-center justify-end text-end flex-grow">
              <IoIosArrowForward className="text-2xl " />
            </div>
          </div>
          {/* sign out */}
          <div className="flex px-2 py-2.5 border-gray-700 rounded-t-sm cursor-pointer hover:bg-gray-900 hover:text-white">
            <PiSignOutFill className="bg-gray-400 h-9 w-9   items-center flex rounded-lg mr-[5%] pb-1" />
            <p className="text-xl flex items-center">Sign Out</p>
            <div className="flex items-center justify-end text-end flex-grow">
              <IoIosArrowForward className="text-2xl " />
            </div>
          </div>

          <p className="text-xl md:pt-7 font-semibold pt-5 flex">
            More Options
          </p>
          {/* Newsletter */}
          <div className="flex px-2  border-b-2 py-2.5 border-gray-700 cursor-pointer rounded-t hover:bg-gray-900 hover:text-white justify-between">
            <p className="text-xl flex items-center">Newsletter</p>

            <Switch />
          </div>
          {/* languages */}
          <div className="flex px-2 py-2.5 border-gray-700 rounded-t-sm cursor-pointer hover:bg-gray-900 hover:text-white">
            <p className="text-xl flex items-center">Languages</p>
            <div className="flex items-center justify-end text-end flex-grow">
              <p className="text-gray-700">English</p>
              <IoIosArrowForward className="text-2xl ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
