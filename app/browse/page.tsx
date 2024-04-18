"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import BrowseCarousel from "./browseCarousel";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Categories from "../categories/categoriesCarousel";
import Footer from "./footer";
import Sidebar from "@/components/sidebar";
import { RxCross2 } from "react-icons/rx";
import AuthorsCarousel from "@/components/authorsCarousel";
import FeaturedBooksCarousel from "@/components/featuredBooksCarousel";
import Link from "next/link";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import firebase from "firebase/app";
import { categories } from "../data";
import DesktopFooter from "@/components/desktopFooter";

export default function Page() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    console.log(open);
  };

  // const addData = async () => {
  //   authors.forEach(async (author) => {
  //     try {
  //       await setDoc(doc(db, "authors", author.author), {
  //         books: author.title,
  //         author: author.author,
  //         category: author.category,
  //         image: author.image,
  //         tags: author.tags,
  //         followers: author.followers,
  //       });
  //       console.log(`${author.author} added successfully`);
  //     } catch (error) {
  //       console.error(`Error adding ${author.author}:`, error);
  //     }
  //   });
  // };

  const addData = async () => {
    categories.forEach(async (category) => {
      try {
        await setDoc(doc(db, "authors", category.category), {
          category: category.category,
          image: category.image,
        });
        console.log(`${category.category} added successfully`);
      } catch (error) {
        console.error(`Error adding ${category.category}:`, error);
      }
    });
  };

  // fetching data from firebase
  interface Author {
    books: string;
    author: string;
    category: string;
    image: string;
    tags: string[];
    followers: string;
  }

  const fetchData = async (): Promise<Author[]> => {
    try {
      // Get a reference to the "Authors" collection
      const authorsCollection = collection(db, "Authors");

      // Get all documents from the "Authors" collection
      const querySnapshot = await getDocs(authorsCollection);

      // Initialize an array to store the fetched data
      const fetchedAuthors: Author[] = [];

      // Loop through each document in the querySnapshot
      querySnapshot.forEach((doc) => {
        // Extract the data from each document
        const authorData = doc.data() as Author;
        // Push the data to the fetchedAuthors array
        fetchedAuthors.push(authorData);
      });

      // Use the fetchedAuthors array in your application
      console.log("Fetched authors data:", fetchedAuthors);

      // Return the fetchedAuthors array
      return fetchedAuthors;
    } catch (error) {
      console.error("Error fetching authors data:", error);
      // Handle errors if necessary
      return []; // Return an empty array in case of error
    }
  };

  return (
    <div className="relative pb-24 md:pb-0">
      <div className="grid grid-cols-3 pt-6 px-4 sm:px-16 relative">
        <div>
          <div className="md:block ">
            <Sidebar />
          </div>
        </div>
        <div className="w-full">
          <p className="font-montserrat font-semibold text-2xl gradient-text sm:text-3xl text-center ">
            Browse
          </p>
        </div>
        <div className="flex justify-end">
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
      </div>
      {/* searchbar */}
      {open && (
        <div className="absolute w-full mt-5 flex justify-center z-50 h-full backdrop-blur-lg">
          <div className="bg-white flex bg-transparent w-11/12 sm:w-3/5 mx-auto justify-center sm:mx-16 border-2 h-14 border-blue-900 rounded-full sm:px-1 mt-8">
            <input
              type="search"
              placeholder="Title, Author, or Keywords"
              className="placeholder:normal-case  lowercase outline-none  placeholder-gray-600 placeholder:text-base text-lg py-3 sm:px-4 sm:text-xl font-montserrat mx-auto w-full px-3 sm:w-full flex  border-none rounded-full cursor:black bg-white text-gray-800"
            />
            <div className="flex-col justify-center flex items-center rounded-lg pr-2">
              <IoSearchOutline
                className="text-3xl flex flex-col justify-center text-bold font-bold cursor-pointer hover:text-orange-600 text-black"
                // onClick={toggle}
              />
            </div>
          </div>
        </div>
      )}

      {/* end of searchbar */}
      <div className="px-5">
        <BrowseCarousel />
      </div>

      <div className="px-6 sm:px-16 justify-between flex pt-6">
        <p className="font-montserrat text-xl font-semibold">Categories</p>
        <Link
          href="/categories"
          className="text-gray-400 font-montserrat flex items-center text-lg cursor-pointer hover:text-orange-600"
        >
          See all
          <MdOutlineArrowForwardIos className="text-lg ml-1 mt-[1px] flex" />
        </Link>
      </div>
      <Categories />

      <div className="px-6 sm:px-16 justify-between flex pt-10">
        <p className="font-montserrat text-xl font-semibold">Popular Authors</p>
        <p className="text-gray-400 font-montserrat flex items-center text-lg cursor-pointer hover:text-orange-600">
          See all
          <MdOutlineArrowForwardIos className="text-lg ml-1 mt-[1px] flex" />
        </p>
      </div>
      {/* authors */}
      <div className="px-2">
        <AuthorsCarousel />
      </div>

      {/* featured books */}
      <div className="px-6 sm:px-16 justify-between flex pt-10">
        <p className="font-montserrat  text-xl font-semibold">Featured Books</p>
        <p className="text-gray-400 font-montserrat    flex items-center text-lg cursor-pointer hover:text-orange-600">
          See all
          <MdOutlineArrowForwardIos className="text-lg ml-1 mt-[1px] flex" />
        </p>
      </div>
      <div>
        <FeaturedBooksCarousel />
      </div>
      {/* <Link href="/continuereading">Continue Reading </Link>
      <button onClick={addData}>click me!</button> */}
      <Footer />
      <DesktopFooter />
    </div>
  );
}
