"use client"
import React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useRouter } from "next/navigation";
import { db } from "../../config/firebase";
import { doc, setDoc, getFirestore, addDoc } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import Interests from "@/components/interests";
import {app} from '../../config/firebase'
import { Spinner, spinner } from "@material-tailwind/react";

export default function Page() {
  const [userName, setUserName] = useState(null);
   const [loading, setLoading] = useState(true);
  const db = getFirestore();
  const user = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    const fetchUserName = async () => {
      if (user) {
        try {
          // Get the user document from the "users" collection
          const userDoc = await getDoc(doc(db, "users", user.uid));

          if (userDoc.exists()) {
            // Access the "name" field from the document data
            const fetchedUserName = userDoc.data().name;
            setUserName(fetchedUserName);
          } else {
            console.log("User document does not exist");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("User not authenticated");
        // Redirect to login page or handle authentication logic
        router.push("/login");
      }
      // Set loading to false once authentication status is determined
      setLoading(false);
    };

    fetchUserName();
  }, [user, db, router]);

  // Check if the user object exists before rendering the page
  if (loading) {
    return (
      <div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
        <Spinner className="spinner text-5xl h-12 w-12" />
      </div>
    );
  }
  // if (!user) {
  //   return (
  //     <div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
  //       <Spinner className="spinner text-5xl h-12 w-12" />
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen text-2xl sm:text-4xl font-custom pb-20">
      <p className="px-8 sm:px-16   pt-10">Choose your interests, {userName}</p>
      <Interests />
      {/* <Interests/> */}
    </div>
  );
}