import React from "react";
import Link from "next/link";

export default function Page() {
  const opacity = 0.7;

  return (
    <div className="font-custom text-base h-screen flex flex-col">
      <div className="flex-shrink-0 h-[35%] relative bg-[url(/image2.jpg)] bg-cover sm:bg-contain bg-top bg-opacity-90">
        {/* overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#131414] to-black h-full m-0 p-0"
          style={{ opacity: opacity }}
        ></div>
        <div className="z-10 relative px-8 sm:px-12 py-10 sm:py-0">
          <p className="text-5xl font-bold pt-12">Welcome back</p>
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
              // onChange={(e) => setEmail(e.target.value)}
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
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="password"
              className="flex outline-none border-black mx-auto border-b-2 w-full  bg-inherit placeholder:text-gray-500 px-1 py-1.5 text-lg mt-10 "
            />
            <p className="cursor-pointer text-base text-blue-700 mt-1">
              forgot password?
            </p>

            {/* submit */}
            <input
              type="submit"
              value="Sign in"
              className="bg-black text-base rounded-md text-white text-center py-5 w-full mt-20 sm:mt-8 cursor-pointer hover:bg-gray-800"
            />

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
