"use client";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function sidebar() {
  // const [dropdown, setDropdown] = useState(false);
  // const toggle = () => {
  //   setDropdown(!dropdown);
  //   console.log;
  // };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="font-custom bg-transparent text-gray-500 hover:text-orange-600 hover:rotate-90 outline-none focus:outline-none hover:bg-transparent">
          <FaBars className={`text-2xl cursor-pointer `} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64  ">
        <div className="px-5 backdrop-blur-3xl rounded-lg font-montserrat py-4 z-20   space-y-5 transition-opacity">
          <p className="cursor-pointer hover:text-orange-600 mt-2 text-[currentColor]">
            Browse{" "}
          </p>
          <p className="cursor-pointer hover:text-orange-600">Books</p>
          <p className="cursor-pointer hover:text-orange-600">Favourites</p>
          <p className="cursor-pointer hover:text-orange-600">Library</p>
          <p className="cursor-pointer hover:text-orange-600">Profile</p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
