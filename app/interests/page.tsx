"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";
import { auth } from "../../config/firebase";
import { db } from "../../config/firebase";
import { getAuth, updateProfile } from "firebase/auth";
import Interests from "@/components/interests";
import { app } from "../../config/firebase";
import { Spinner, spinner } from "@material-tailwind/react";

export default function Page() {
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();
  const user = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        try {
          // Get the user document from the "users" collection
          const userDoc = await getDoc(doc(db, "users", userAuth.uid));

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
        // router.push("/login");
      }

      setLoading(false);
    });

    // Cleanup function to unsubscribe from the auth state listener
    return () => unsubscribe();
  }, [db, router]);

  // Check if the user object exists before rendering the page
  if (loading) {
    return (
      <div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
        <Spinner className="spinner text-5xl h-12 w-12" />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-2xl sm:text-4xl font-custom pb-20">
      <p className="px-8 sm:px-16   pt-10">Choose your interests, {userName}</p>
      <Interests />
    </div>
  );
}
