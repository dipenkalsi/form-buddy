import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-2xl bg-gradient-to-r from-purple-700 to-red-800 text-transparent bg-clip-text hover:cursor-pointer"
    >
      FormBuddy
    </Link>
  );
}

export default Logo;