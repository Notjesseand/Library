"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { GoCircle, GoCheckCircle } from "react-icons/go";
import { favourites } from "@/app/data";
import { getFirestore, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth } from "../../../config/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Spinner } from "@material-tailwind/react";
import Sidebar from "@/components/sidebar";

export default function Page() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = auth.currentUser;
  const router = useRouter();

  const handleToggle = (value) => {
    if (selectedItems.includes(value)) {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    } else {
      // Check if the count of selected items is less than 6
      if (selectedItems.length < 6) {
        setSelectedItems((prevSelected) => [...prevSelected, value]);
      } else {
        console.log("Maximum number of selections reached (6).");
      }
    }
  };

  const handleAddCategories = async () => {
    try {
      setIsLoading(true);

      // Get the authenticated user
      const user = auth.currentUser;

      if (user) {
        // Create a Firestore database reference
        const db = getFirestore();

        // Update the user document with the new books data
        await updateDoc(doc(db, "users", user.uid), {
          books: selectedItems,
        });

        console.log("User categories added:", selectedItems);
        // Redirect to the desired page
        router.push("/browse");
      } else {
        console.error("User not authenticated");
        // Handle the case where the user is not authenticated
      }
    } catch (error) {
      console.error("Error adding user categories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(selectedItems);
  return (
    <div className="font-custom pb-36  sm:px-0 pt-7">
      <div className="sm:px-16">
        <Sidebar className="" />
      </div>
      <div className="px-2.5">
        <p className="text-4xl font-open pt-4 sm:pt-5 sm:mx-16 gradient-text">
          Select favourites
        </p>

        <p className="text-xl font-custom mt-1 sm:mx-16 text-gray-500">
          Choose your favorite 6 books from the collection, and we&apos;ll tune
          your recommendations
        </p>
        <div className="flex  bg-transparent w-full sm:w-2/5 mx-auto sm:justify-start justify-center sm:mx-16 border-2    border-gray-500 rounded-full sm:px-1 mt-5">
          <input
            type="search"
            placeholder="Title, Author, or Keywords"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="placeholder:normal-case  lowercase outline-none  placeholder-gray-600 placeholder:text-base text-lg   py-3 sm:px-3 sm:text-xl font-open  mx-auto w-full px-3 sm:w-full flex  border-none bg-transparent rounded-full cursor:black "
          />
          <div className="flex-col justify-center flex items-center rounded-lg pr-2">
            <IoSearchOutline className="text-3xl flex flex-col justify-center text-bold font-bold" />
          </div>
        </div>
        {/* grid */}

        <ToggleGroup
          type="multiple"
          className="grid grid-cols-1 sm:grid-cols-2 pt-8 sm:px-16 gap-x-5 gap-y-7"
        >
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
              <ToggleGroupItem
                key={index}
                onClick={() => handleToggle(book.category)}
                value={book}
                className="relative w-full  h-36 flex justify-between px-0 pr-3 align-center justify-items-center rounded-lg cursor-pointer hover:opacity-70 border-2 sm:py-1"
              >
                <div
                  className=" bg-center bg-cover h-full w-24 sm:w-36 rounded"
                  style={{ backgroundImage: `url(${book.image})` }}
                ></div>
                <div className="pl-4 h-full flex flex-col justify-center text-start w-3/5 text-xl">
                  <p className="text-[17px] sm:text-xl">{book.title}</p>
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

      {/* count */}
      <div className="w-full h-24 bg-gray-300 bottom-0 fixed flex text-black justify-center flex-col">
        <div className="flex items-center justify-around sm:justify-center sm:px-14 sm:gap-x-36">
          <p className="text-xl flex"> {selectedItems.length} of 6 selected</p>
          <button
            href="/browse"
            onClick={handleAddCategories}
            className="text-black px-12 rounded-lg bg-gray-500 py-3 text-[18px] hover:bg-black hover:text-white"
          >
            {isLoading ? (
              <Spinner className="text-center flex justify-center" />
            ) : (
              "Done"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
