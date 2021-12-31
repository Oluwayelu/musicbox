/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import Drawer from "./Drawer";
import NavItem from "./Item";
import { BROWSE, LIBRARY, HOME } from "routes/CONSTANTS";

export default function AuthNavbar() {
  const { pathname } = useRouter();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (pathname === HOME) setActive("Home");
    else if (pathname === BROWSE) setActive("Browse");
    else if (pathname === LIBRARY) setActive("Library");
  }, [pathname]);

  return (
    <div className="px-5 md:px-10 h-20  flex items-center justify-between bg-transparent">
      <div className="flex items-center">
        <div className="w-20 ">
          <img src="/logo.svg" alt="logo" />
        </div>
        <NavItem
          name="Home"
          active={active}
          setActive={setActive}
          route={HOME}
        />
        <NavItem
          name="Browse"
          active={active}
          setActive={setActive}
          route={BROWSE}
        />
        <NavItem
          name="Library"
          active={active}
          setActive={setActive}
          route={LIBRARY}
        />
        <Link href="/home">
          <a className="text-primary-400 mx-3 hidden md:inline-block border-2 border-primary-400 rounded-full px-5 py-1">
            {active}
          </a>
        </Link>
      </div>
      <div>
        <div className="hidden md:flex items-center text-white space-x-5">
          <div className="flex px-3 py-2 bg-gray-200 rounded-full  space-x-2">
            <img src="/icons/search.svg" alt="search" />
            <input
              placeholder="Search"
              className="w-32 placeholder-white bg-transparent border-none focus:outline-none"
            />
          </div>
          <div className="inline-flex items-center space-x-2">
            <Image
              src="/svg/profile.svg"
              alt="profile"
              width={35}
              height={35}
            />
            <p>John Doe</p>
            <div>
              <Image src="/icons/down.svg" alt="down" width={10} height={10} />
            </div>
          </div>
        </div>

        <Drawer open={open} close={close} />

        <div className="md:hidden block" onClick={close}>
          <Image src="/icons/menu.svg" width={30} height={30} alt="menu" />
        </div>
      </div>
    </div>
  );
}
