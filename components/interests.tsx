"use client";
import React, { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TiTick } from "react-icons/ti";
import { getAuth, updateProfile } from "firebase/auth";
import Link from "next/link";
import { auth } from "@/config/firebase";
import { db } from "@/config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { categories } from "@/app/data";

const Interests = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [itemsToShow, setItemsToShow] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  const user = auth.currentUser;

  const handleToggle = (value: any) => {
    // @ts-ignore
    if (selectedItems.includes(value)) {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    } else {
      // @ts-ignore
      setSelectedItems((prevSelected: any) => {
        return [...prevSelected, value];
      });
    }
  };
  console.log(selectedItems);

  const addData = async () => {
    setIsLoading(true);
    try {
      // @ts-ignore
      await setDoc(doc(db, "interests", user.uid), {
        interests: selectedItems,
      });
      // setComment("");
      setIsLoading(false);
      console.log(`data added successfully`);
    } catch (error) {
      setIsLoading(false);
      console.error(`Error adding data`, error);
    }
  };

  // console.log(user.uid);

  return (
    <div>
      <ToggleGroup
        type="multiple"
        className="mt-10 grid sm:grid-cols-4 grid-cols-2 justify-between gap-y-14 text-xl px-2"
      >
        {categories
          .slice(0, itemsToShow)
          .map((category: any, index: number) => (
            <div
              key={index}
              className=" mx-auto justify-center w-full items-center text-center"
            >
              <ToggleGroupItem
                // @ts-ignore

                value={category}
                className={`relative sm:h-72  h-44 w-44 mx-auto sm:w-72 rounded-full  bg-cover hover:opacity-80 `}
                onClick={() => handleToggle(category.category)}
                style={{ backgroundImage: `url(${category.image})` }}
              >
                {selectedItems.includes(category.category) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131414] to-black m-0 p-0 rounded-full opacity-50 flex items-center justify-center">
                    <TiTick className="text-5xl text-[#5fdf9a] opacity-70 absolute" />
                  </div>
                )}
              </ToggleGroupItem>
              <div className=" capitalize text-center">{category.category}</div>
            </div>
          ))}
      </ToggleGroup>

      {itemsToShow < categories.length && (
        <button
          onClick={() => setItemsToShow((prev) => prev + 8)}
          className="text-black bg-white mt-14 cursor-pointer px-10 mx-auto flex text-lg border-gray-500 border py-3 rounded-lg"
        >
          See More
        </button>
      )}
      {itemsToShow >= categories.length && (
        <div className="text-center" onClick={addData}>
          <Link
            href="/browse"
            className="inline-block text-black bg-white mt-14 cursor-pointer px-10 text-lg border-gray-500 border py-3 rounded-lg mx-auto"
          >
            Continue
          </Link>
        </div>
      )}
    </div>
  );
};

export default Interests;
