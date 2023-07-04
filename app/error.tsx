"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="font-bold text-3xl mb-3 pb-3">Error</h1>
      <p className="text-3xl font-bold mb-3 pb-3">Something went wrong</p>
      <p>
        <Link href="/"> Back Home</Link>
      </p>
    </div>
  );
}
