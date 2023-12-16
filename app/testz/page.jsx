// "use client";
// import { auth } from "../../config/firebase";
// import { useEffect, useState } from "react";
// import { getAuth } from "firebase/auth";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";

// const UserProfilePage = () => {
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

//   return <div className="text-white">{userName}</div>;
// };

// export default UserProfilePage;

"use client";
import { auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const UserProfilePage = () => {
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

  return <div className="text-white">{userName}</div>;
};

export default UserProfilePage;
