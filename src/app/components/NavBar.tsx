import React from "react";
import Link from "next/link";
import Search from "./Search";

export default function NavBar() {
  return (
    <header className="bg-black sticky top-0 z-10">
      <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-white">
        <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
          <Link href="/">Pix Finder</Link>
        </h1>
        <Search />
      </nav>
    </header>
  );
}
