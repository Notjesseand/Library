"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useRouter } from "next/navigation";
import { db } from "../../config/firebase";
import { doc, setDoc, getFirestore, addDoc } from "firebase/firestore";
import { Spinner } from "@material-tailwind/react";

import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState<undefined | string>(undefined);
  const [passwordError, setPasswordError] = useState("");

  const opacity = 0.7;

  useEffect(() => {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Set up the onAuthStateChanged listener to check the user's authentication status
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in.
            router.push("/interests");
          }
        });
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, []); // Run this effect only once on component mount

  const handleSignUp = async () => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const db = getFirestore();

      await setDoc(doc(db, "users", user.uid), {
        name: name,
      });

      localStorage.setItem("username", name);

      console.log("User signed up:", user);
      router.push("/interests");
    } catch (error: any) {
      // Handle specific error cases
      const errorCode = error.code;
      const errorMessage = error.message;

      switch (errorCode) {
        case "auth/email-already-in-use":
          setEmailError("Email address is already in use." as string);
          break;
        case "auth/invalid-email":
          setEmailError("Invalid email address." as string);
          break;
        case "auth/weak-password":
          setPasswordError(
            "Weak password. Please use a stronger password." as string
          );
          break;
        default:
          // Handle other errors or log the error
          console.error("Error signing up:", error);
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-custom text-base h-screen flex flex-col">
      <div className="flex-shrink-0 h-[30%] relative bg-[url(/image2.jpg)] bg-cover sm:bg-contain bg-top bg-opacity-90">
        {/* overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#131414] to-black h-full m-0 p-0"
          style={{ opacity: opacity }}
        ></div>
        <div className="z-10 relative px-8 sm:px-12 py-10 sm:py-0 text-white">
          <p className="text-4xl sm:text-5xl font-bold pt-12">Welcome user</p>
          <p className="mt-5">Sign up to join</p>
        </div>
      </div>
      <div className="flex-grow bg-white py-5 text-black">
        <div className="sm:w-2/5 mx-auto w-11/12">
          <div className=" py-5 text-black">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              className="flex outline-none border-black mx-auto border-b-2 w-full  bg-inherit placeholder:text-gray-500 px-1 py-1.5 text-lg  "
            />

            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="flex outline-none border-black mx-auto border-b-2 w-full  bg-inherit placeholder:text-gray-500 px-1 py-1.5 text-lg mt-10  "
            />
            {emailError && (
              <p className="text-red-600 mx-auto mt-1 ">{emailError}</p>
            )}
            {/* <label htmlFor="email" className="text-black text-base">
            Email
          </label> */}
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="flex outline-none border-black mx-auto border-b-2 w-full  bg-inherit placeholder:text-gray-500 px-1 py-1.5 text-lg mt-10 "
            />
            {emailError && (
              <p className="text-red-600 mx-auto mt-1 ">{passwordError}</p>
            )}
            <p className="cursor-pointer text-base text-blue-700 mt-1">
              forgot password?
            </p>

            {/* submit */}
            <button
              value="Sign up"
              onClick={handleSignUp}
              className="bg-black text-base rounded-md text-white text-center py-5 w-full mt-20 sm:mt-8 cursor-pointer hover:bg-gray-800"
            >
              {loading ? <Spinner className="mx-auto" /> : "Sign up"}
            </button>

            {/* <p className="text-center mt-1">
              or{" "}
              <span className="text-blue-600 cursor-pointer">
                sign up with Google
              </span>
            </p> */}
            {/* sign up prompt */}
            <p className="text-center mt-9 sm:mt-4 ">
              Already have an account?{" "}
              <Link href="login" className="text-blue-600">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
