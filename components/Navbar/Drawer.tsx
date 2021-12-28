/* eslint-disable @next/next/no-img-element */
import React from "react";
import classnames from "classnames";
import Link from "next/link";
import PropTypes, { InferProps } from "prop-types";
import NavLink from "./NavLink";

function Drawer({ open, close }: InferProps<typeof Drawer.propTypes>) {
  const drawer = classnames({
    "transform top-0 left-0 w-80 bg-gray-500 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30":
      true,
    "translate-x-0": open,
    "-translate-x-full": !open,
  });
  return (
    <div className="flex">
      <div className={drawer}>
        <div className="flex flex-col items-start space-y-10">
          <div className="mx-3 mt-5 inline-flex items-center justify-center">
            <img src="/logo.svg" alt="logo" className="w-20" />
          </div>
          <div className="w-full flex flex-col md:flex-row space-y-3">
            <Link href="/download">
              <a className="text-white mx-3">Download</a>
            </Link>
            <Link href="/help">
              <a className="text-white mx-3">Help</a>
            </Link>

            <Link href="/login">
              <a className="mx-3 border-2 border-white rounded-full px-10 py-1 text-white text-center">
                Login
              </a>
            </Link>

            <Link href="/signup">
              <a className="mx-3 bg-white rounded-full px-10 py-1 text-center">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          open && "bg-gray-300 w-full h-full fixed inset-0 opacity-75 z-20"
        }`}
        onClick={close}
      />
    </div>
  );
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default Drawer;
