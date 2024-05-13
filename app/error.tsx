"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <p className="text-4xl gradient-text py-2">Something went wrong!</p>
        <Link
          href="/browse"
          className="border-b-2 border-orange-600 text-center inline-flex justify-center"
        >
          Try again
        </Link>
      </div>
    </div>
  );
}
