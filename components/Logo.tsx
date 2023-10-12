import Link from "next/link";
import React from "react";
import {SiGoogleforms} from 'react-icons/si'
function Logo() {
  return (
    <Link
      href={"/"}
      className="font-semibold items-center justify-center space-x-2 text-2xl  hover:cursor-pointer flex"
    >
      <SiGoogleforms/>
      <p>FormBuddy</p>
    </Link>
  );
}

export default Logo;