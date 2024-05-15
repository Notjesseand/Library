"use client";
import React from "react";
import { Spinner } from "@material-tailwind/react";

export default function loading() {
  return (
    <div>
      <Spinner className="h-20 w-20" />
    </div>
  );
}
