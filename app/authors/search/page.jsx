"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { categories } from "../../data";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { GoCircle, GoCheckCircle } from "react-icons/go";
import { authors } from "@/app/data";
import { getFirestore, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth } from "../../../config/firebase";
import { useRouter } from "next/navigation";
import { Spinner, button } from "@material-tailwind/react";
import AuthorsCarousel from "../authorsCarousel";
import Footer from "../../../components/footer";
import Button from "@material-tailwind/react";

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
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className="pb-12">
      <div className="pt-7 md:py-9 px-4 sm:px-20 flex justify-between">
        <Link href="/browse">
          <IoIosArrowBack className="text-4xl" />
        </Link>
        {open ? (
          <RxCross2
            onClick={toggle}
            className="text-3xl cursor-pointer hover:text-orange-600 hover:text-4xl transition-all duration-500 "
          />
        ) : (
          <IoSearchOutline
            onClick={toggle}
            className="text-3xl cursor-pointer hover:text-orange-600 hover:text-4xl transition-all duration-500  "
          />
        )}
      </div>
      {/* searchbar */}
      {open && (
        <div className="absolute w-full  flex justify-center z-50 h-full backdrop-blur-lg">
          <div className="bg-white flex bg-transparent w-11/12 sm:w-3/5 mx-auto justify-center sm:mx-16 border-2 h-14 border-blue-900 rounded-full sm:px-1 mt-8">
            <input
              type="search"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Title, Author, or Keywords"
              className="placeholder:normal-case  lowercase outline-none  placeholder-gray-600 placeholder:text-base text-lg py-3 sm:px-4 sm:text-xl font-montserrat mx-auto w-full px-3 sm:w-full flex  border-none rounded-full cursor:black bg-white text-gray-800"
            />
            <div className="flex-col justify-center flex items-center rounded-lg pr-2">
              <IoSearchOutline
                className="text-3xl flex flex-col justify-center text-bold font-bold cursor-pointer hover:text-orange-600 text-black"
                onClick={toggle}
              />
            </div>
          </div>
        </div>
      )}

      <div className="px-4 sm:px-20">
        <p className="text-3xl mt-6">Authors</p>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-8 sm:px-0 gap-x-5 gap-y-7">
          {authors
            .filter(
              (book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.tags.some((tag) =>
                  tag.toLowerCase().includes(searchQuery.toLowerCase())
                )
            )
            .map((book, index) => (
              <div
                key={index}
                className="relative w-full  h-36 sm:h-40 flex justify-between px-0 pr-3 align-center justify-items-center rounded-lg cursor-pointer hover:opacity-70 border-2 sm:py-3 items-center"
              >
                <div
                  className=" bg-center bg-cover h-full w-auto aspect-square  rounded-full ml-3"
                  style={{ backgroundImage: `url(${book.image})` }}
                ></div>
                <div className="pl-4 h-full flex flex-col justify-center text-start w-3/5 text-xl">
                  <p className="text-[17px] sm:text-xl hover:text-orange-600">
                    {book.author}
                  </p>
                  <p className="text-base">{book.followers} followers</p>
                  <p className="text-sm text-gray-400/">
                    {book.tags.join(", ")}
                  </p>{" "}
                </div>

                <div className="w-1/6 text-sm text-right font-custom">
                  {selectedItems.includes(book.category) ? (
                    <div
                      onClick={() => handleToggle(book.category)}
                      value={book}
                      className="justify-end border-[1.4px] border-gray-500 px-2 py-0.5 rounded z-30 inline-block"
                    >
                      Following
                    </div>
                  ) : (
                    <div
                      onClick={() => handleToggle(book.category)}
                      value={book}
                      className="bg-gray-300 text-black justify-end items-end w-auto inline-block  border-[1.4px]    border-gray-500 px-2 py-0.5 rounded z-30 "
                    >

                      Follow
                    </div>
                  )}
                </div>

                {/* </div> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
