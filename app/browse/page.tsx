"use client";
import React, { useState, useEffect } from "react";
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
import { collection, addDoc, getDocs, getDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import firebase from "firebase/app";
import { categories } from "../data";
import DesktopFooter from "@/components/desktopFooter";
import { fetchBookById } from "@/components/fetchBooks";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";

import imgplace from "@/public/booklogo.png";

export default function Page() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    console.log(open);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [interests, setInterests] = useState<any>();

  const [searchBook, setDataSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(null);
  const user = auth.currentUser;

  // search and return books based on the search query
  useEffect(() => {
    const searchBook = () => {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=AIzaSyC6vXLjqb1qYL49z7ZB4Rt4MZcDwTl15uI&maxResults=40`
        )
        .then((res) => setDataSearch(res.data.items))
        .catch((err) => console.log(err));
    };
    searchBook();
  }, [searchQuery]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, fetch user ID
        const userId = user.uid;
        // console.log("User ID:", userId);

        // Fetch user interests
        fetchInterests(userId);
      } else {
        // User is signed out
        console.log("User is signed out");
      }
      setLoading(false); // Set loading to false once authentication state is determined
    });
  }, []); // Run this effect only once when the component mounts

  const fetchInterests = async (userId: any) => {
    try {
      // @ts-ignore
      const docSnap = await getDoc(doc(db, "interests", userId));
      if (docSnap.exists()) {
        const interestsData = docSnap.data();
        // @ts-ignore
        setInterests(interestsData);
      } else {
        console.log("No interests document found for the user");
      }
    } catch (error) {
      console.error("Error fetching interests:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
        <Spinner className="spinner text-5xl h-12 w-12" />
      </div>
    );
  }

  const placeholder = "";

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
        <div className="absolute w-full mt-5 justify-center z-50 h-full backdrop-blur-lg mx-auto">
          <div className="bg-white flex bg-transparent w-11/12 sm:w-[5/6] mx-auto justify-center sm:mx-16 border-2 h-14 border-blue-900 rounded-full sm:px-1 mt-8">
            <input
              type="search"
              placeholder="Title, Author, or Keywords"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="placeholder:normal-case  lowercase outline-none  placeholder-gray-600 placeholder:text-base text-lg py-3 sm:px-4 sm:text-xl font-montserrat mx-auto w-full px-3 sm:w-full flex  border-none rounded-full cursor:black bg-white text-gray-800 justify-center "
            />
            <div className="flex-col justify-center flex items-center rounded-lg pr-2">
              <IoSearchOutline
                className="text-3xl flex flex-col justify-center text-bold font-bold cursor-pointer hover:text-orange-600 text-black"
                // onClick={toggle}
              />
            </div>
          </div>
          {searchQuery !== "" &&
            (searchBook && searchBook.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-10">
                {searchBook.map((item: any, index) => (
                  // grid
                  <div key={index}>
                    <Link
                      href={`/browse/google/${item.id}`}
                      className="flex h-44 sm:h-56 bg-gray- bg-cover w-36 sm:w-44 bg-center mx-auto rounded bg-purple-100"
                      style={{
                        backgroundImage: `url(${
                          item?.volumeInfo?.imageLinks?.thumbnail || imgplace
                        })`,
                      }}
                    ></Link>
                    <Link href={`/browse/google/${item.id}`}>
                      <p className="mt-3 capitalize text-xl text-center">
                        {item?.volumeInfo?.title}
                      </p>
                      <p className="capitalize text-base text-gray-400 text-center">
                        {item?.volumeInfo?.authors}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p className="flex text-center justify-center">
                  no books with <span className="px-2">{searchQuery}</span>{" "}
                  found
                </p>
              </div>
            ))}
        </div>
      )}

      {/* end of searchbar */}
      <div className="px-5">
        <BrowseCarousel interests={interests} />
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

      {/* <iframe
        className="w-24 h-36 rounded-lg"
        src="https://res.cloudinary.com/dv62ty87r/image/upload/v1715788788/Personalized_Digital_Library_by_Jesse_Nnorom_x33bje.pdf"
        frameborder="0"
      ></iframe> */}

      {/* <Link href="/continuereading">Continue Reading </Link>
      <button onClick={addData}>click me!</button> */}
      <Footer />
      <DesktopFooter />
    </div>
  );
}
