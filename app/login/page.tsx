"use client";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../../config/firebase";
import Link from "next/link";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../config/firebase";

export default function Page() {
  const opacity = 0.7;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Now, set up the onAuthStateChanged listener to check the user's authentication status
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in.
            router.push("/interests");
          } else {
            router.push("/login");
          }
        });
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, []);

  const signIn = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // The onAuthStateChanged listener will handle the redirection on successful sign-in.
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error signing in:", error.message);
      } else if (error instanceof Object && "code" in error) {
        console.error("Firebase error code:", (error as any).code);
      } else {
        console.error("Unknown error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-custom text-base h-screen flex flex-col">
      <div className="flex-shrink-0 h-[35%] relative bg-[url(/image2.jpg)] bg-cover sm:bg-contain bg-top bg-opacity-90">
        {/* overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#131414] to-black h-full m-0 p-0"
          style={{ opacity: opacity }}
        ></div>
        <div className="z-10 relative px-8 sm:px-12 py-10 sm:py-0 text-white">
          <p className="text-4xl sm:text-5xl font-bold pt-12">Welcome back</p>
          <p className="mt-5">Sign in to continue</p>
        </div>
      </div>
      <div className="flex-grow bg-white py-5 text-black">
        <div className="sm:w-2/5 mx-auto w-11/12">
          <div className=" py-5 text-black">
            <label htmlFor="email" className="text-black text-base">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@outlook.com"
              className="flex outline-none border-black mx-auto border-b-2 w-full  bg-inherit placeholder:text-gray-500 px-1 py-1.5 text-lg  "
            />
            {/* {emailError && (
            <p className="text-red-600 sm:w-5/6 mx-auto mt-1 ">{emailError}</p>
          )} */}
            {/* <label htmlFor="email" className="text-black text-base">
            Email
          </label> */}
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="flex outline-none border-black mx-auto border-b-2 w-full  bg-inherit placeholder:text-gray-500 px-1 py-1.5 text-lg mt-10 "
            />
            <p className="cursor-pointer text-base text-blue-700 mt-1">
              forgot password?
            </p>
            {/* submit */}
            <button
              value="Sign in"
              onClick={signIn}
              className="bg-black text-base rounded-md text-white text-center py-5 w-full mt-20 sm:mt-8 cursor-pointer hover:bg-gray-800 flex justify-center text center"
            >
              {loading ? (
                <Spinner className="text-center flex justify-center" />
              ) : (
                "Sign In"
              )}
            </button>
            <p className="text-center mt-1">
              or{" "}
              <span className="text-blue-600 cursor-pointer">
                Continue with Google
              </span>
            </p>
            {/* sign up prompt */}
            <p className="text-center mt-9 sm:mt-4 ">
              Don&apos;t have an account?{" "}
              <Link href="signup" className="text-blue-600">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
