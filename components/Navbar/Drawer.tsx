/* eslint-disable @next/next/no-img-element */
import React from "react";
import classnames from "classnames";
import Link from "next/link";
import PropTypes, { InferProps } from "prop-types";

function Drawer({ open }: InferProps<typeof Drawer.propTypes>) {
  const drawer = classnames({
    "transform top-0 left-0 w-64 bg-gray-500 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30":
      true,
    "translate-x-0": open,
    "-translate-x-full": !open,
  });
  return (
    <div className={drawer}>
      <div className={open ? "flex flex-col items-start " : "hidden"}>
        <div className="mx-3 mt-5 inline-flex items-center justify-center">
          <img src="/logo.svg" alt="logo" className="w-20" />
        </div>
        <Link href="/help">
          <a className="text-white mt-10 mx-3 my-2 md:hidden inline-block">
            Help
          </a>
        </Link>
        <Link href="/download">
          <a className="text-white mx-3 my-2 md:hidden inline-block">
            Download
          </a>
        </Link>

        <Link href="/login">
          <a className="w-40 mx-3 my-2 border-2 border-white rounded-full  py-1 text-white text-center md:hidden inline-block">
            Login
          </a>
        </Link>

        <Link href="/signup">
          <a className="w-40 mx-3 my-2 bg-white rounded-full py-1 text-center font-medium md:hidden inline-block">
            Sign Up
          </a>
        </Link>
      </div>
    </div>
  );
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Drawer;
