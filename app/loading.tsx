"use client";
import React from "react";
import { Spinner } from "@material-tailwind/react";

export default function loading() {
  return (
    <div className="h-screen w-full flex items-center">
      <Spinner className="h-12 w-12 flex mx-auto" />
    </div>
  );
}
