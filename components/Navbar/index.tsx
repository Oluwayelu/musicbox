/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Drawer from "./Drawer";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-5 md:px-40 h-20  flex items-center justify-between bg-transparent">
      <div className="w-20 ">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="flex items-center">
        <Link href="/download">
          <a className="text-white mx-3 hidden md:inline-block">Download</a>
        </Link>
        <Link href="/help">
          <a className="text-white mx-3 hidden md:inline-block">Help</a>
        </Link>

        <Link href="/login">
          <a className="mx-3 border-2 border-white rounded-full px-10 py-1 text-white hidden md:inline-block">
            Login
          </a>
        </Link>

        <Link href="/signup">
          <a className="mx-3 bg-white rounded-full px-10 py-1 hidden md:inline-block">
            Sign Up
          </a>
        </Link>

        <Drawer open={open} />

        <div className="md:hidden block" onClick={() => setOpen(!open)}>
          <Image src="/icons/menu.svg" width={30} height={30} alt="menu" />
        </div>
      </div>
    </div>
  );
}
