"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { categories } from "@/app/data";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TiTick } from "react-icons/ti";
import { GoCircle,GoCheckCircle  } from "react-icons/go";
import { favourites } from "@/app/data";

export default function Page() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");
  const handleToggle = (value) => {
    if (selectedItems.includes(value)) {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    } else {
      setSelectedItems((prevSelected) => [...prevSelected, value]);
    }
  };
  
  console.log(selectedItems);
  return (
    <div className="font-custom pb-12">
      <p className="text-4xl font-custom mx-7 pt-8 sm:mx-16">
        Select favourites
      </p>
      <p className="text-xl font-custom mx-7 mt-3 sm:mx-16 text-gray-500">
        Choose your favorite 5 books, and we&apos;ll show you what to read next
      </p>
      <div className="flex  bg-transparent w-5/6 sm:w-2/5 mx-auto sm:justify-start justify-center sm:mx-16 border-2    border-gray-500 rounded-lg pl-2 mt-5">
        <div className="flex-col justify-center flex items-center rounded-lg">
          <IoSearchOutline className="text-3xl flex flex-col justify-center text-bold font-bold" />
        </div>
        <input
          type="search"
          placeholder="Title or Author"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="outline-none  placeholder-gray-600   py-3 px-3 text-xl font-custom  mx-auto w-4/5 sm:w-full flex  border-none bg-transparent rounded-lg cursor:black "
        />
      </div>
      {/* grid */}

      <ToggleGroup
        type="multiple"
        className="grid grid-cols-1 sm:grid-cols-2 pt-8 sm:px-16 gap-x-5 px-6 gap-y-7"
      >
        {/* {favourites.map((book, index) => (
          <ToggleGroupItem
            key={index}
            onClick={() => handleToggle(book.category)}
            value={book}
            className="relative w-full  h-36 flex justify-between px-4 align-center justify-items-center rounded-lg cursor-pointer hover:opacity-70 border-2 py-1"
          >
            <div
              className=" bg-cover h-full w-24 sm:w-36 rounded"
              style={{ backgroundImage: `url(${book.image})` }}
            ></div>
            <div className="pl-4 h-full flex flex-col justify-center text-start w-3/5 text-xl">
              <p className="text-xl">{book.title}</p>
              <p className="text-base text-gray-400">{book.author}</p>
            </div>

            <div className="h-full flex flex-col justify-center">
              {selectedItems.includes(book.category) ? (
                <GoCheckCircle className="text-3xl text-[#5fdf9a] opacity-70 " />
              ) : (
                <GoCircle className="text-3xl text-[#1e2722] opacity-70" />
              )}
            </div>
          </ToggleGroupItem>
        ))} */}

        {favourites
          .filter(
            (book) =>
              book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
              book.tags.some((tag) =>
                tag.toLowerCase().includes(searchQuery.toLowerCase())
              )
          )
          .map((book, index) => (
            // ... the rest of your code"""
            <ToggleGroupItem
              key={index}
              onClick={() => handleToggle(book.category)}
              value={book}
              className="relative w-full  h-36 flex justify-between px-4 align-center justify-items-center rounded-lg cursor-pointer hover:opacity-70 border-2 py-1"
            >
              <div
                className=" bg-cover h-full w-24 sm:w-36 rounded"
                style={{ backgroundImage: `url(${book.image})` }}
              ></div>
              <div className="pl-4 h-full flex flex-col justify-center text-start w-3/5 text-xl">
                <p className="text-xl">{book.title}</p>
                <p className="text-base text-gray-400">{book.author}</p>
              </div>

              <div className="h-full flex flex-col justify-center">
                {selectedItems.includes(book.category) ? (
                  <GoCheckCircle className="text-3xl text-[#5fdf9a] opacity-70 " />
                ) : (
                  <GoCircle className="text-3xl text-[#1e2722] opacity-70" />
                )}
              </div>
            </ToggleGroupItem>
          ))}
      </ToggleGroup>
    </div>
  );
}
