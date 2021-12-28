/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Drawer from "./Drawer";
import NavLink from "./NavLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(!open);
  };
  return (
    <div className="px-5 md:px-40 h-20  flex items-center justify-between bg-transparent">
      <div className="w-20 ">
        <Link href="/" passHref>
          <img src="/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center flex-col md:flex-row">
          <Link href="/download">
            <a className="text-white mx-3 hidden md:block">Download</a>
          </Link>
          <Link href="/help">
            <a className="text-white mx-3 hidden md:block">Help</a>
          </Link>

          <Link href="/login">
            <a className="mx-3 border-2 border-white rounded-full px-10 py-1 text-white hidden md:block">
              Login
            </a>
          </Link>

          <Link href="/signup">
            <a className="mx-3 bg-white rounded-full px-10 py-1 hidden md:block">
              Sign Up
            </a>
          </Link>
        </div>

        <Drawer open={open} close={close} />

        <div className="md:hidden block" onClick={close}>
          <Image src="/icons/menu.svg" width={30} height={30} alt="menu" />
        </div>
      </div>
    </div>
  );
}
