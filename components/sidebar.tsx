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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="font-custom bg-transparent text-gray-500 hover:text-orange-600 outline-none focus:outline-none hover:bg-transparent">
          <FaBars className="text-2xl cursor-pointer" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64  ">
        <div className="px-5 backdrop-blur-3xl rounded-lg font-montserrat py-4 z-20   space-y-5 transition-opacity">
          <p className="cursor-pointer hover:text-orange-600 mt-2 text-[currentColor]">
            <Link href="/authors">Authors</Link>{" "}
          </p>
          <p className="cursor-pointer hover:text-orange-600">
            <Link href="/categories">Categories</Link>{" "}
          </p>
          <p className="cursor-pointer hover:text-orange-600">
            <Link href="/favourites">Favourites</Link>
          </p>
          <p className="cursor-pointer hover:text-orange-600">Library</p>
          <p className="cursor-pointer hover:text-orange-600">Profile</p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


