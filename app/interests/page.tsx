// "use client"
// import React from 'react'
// import Interests from '@/components/interests';
// import { useEffect, useState } from "react";
// import { getAuth } from "firebase/auth";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { auth } from "../../config/firebase";
// export default function page() {
//   const [userName, setUserName] = useState(null);
//   const auth = getAuth();
//   const db = getFirestore();
//   const user = auth.currentUser;
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUserName = async () => {
//       if (user) {
//         try {
//           // Get the user document from the "users" collection
//           const userDoc = await getDoc(doc(db, "users", user.uid));

//           if (userDoc.exists()) {
//             // Access the "name" field from the document data
//             const fetchedUserName = userDoc.data().name;
//             setUserName(fetchedUserName);
//           } else {
//             console.log("User document does not exist");
//           }
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       } else {
//         console.log("User not authenticated");
//         // Redirect to login page or handle authentication logic
//         router.push("/login");
//       }
//     };

//     fetchUserName();
//   }, [user, db, router]);
//   return (
//     <div className="min-h-screen text-2xl  sm:text-4xl font-custom pb-20">
//       <p className="px-8 sm:px-16   pt-10">Choose Interests {userName}</p>
//       <Interests/>
//       {/* <Interests/> */}
//     </div>
//   );
// }
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

export default function Page() {
  const [userName, setUserName] = useState(null);
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
    };

    fetchUserName();
  }, [user, db, router]);

  // Check if the user object exists before rendering the page
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen text-2xl sm:text-4xl font-custom pb-20">
      <p className="px-8 sm:px-16   pt-10">Choose Interests {userName}</p>
      <Interests />
      {/* <Interests/> */}
    </div>
  );
}