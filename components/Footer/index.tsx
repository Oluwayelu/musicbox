import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-40 text-gray-600 body-font bg-indigo-700">
      <div className="px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className=" flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src="/logo.svg" height={100} width={150} alt="logo" />
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-left">
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font font-bold text-gray-200 tracking-widest text-md mb-3">
              MUSICBOX
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-primaryLight" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-white hover:text-primaryLight" href="#">
                  Premium
                </a>
              </li>
              <li>
                <a className="text-white hover:text-primaryLight" href="#">
                  Features
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full ">
            <h2 className="title-font font-bold text-gray-200 tracking-widest text-md mb-3">
              COMMUNITIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-primaryLight" href="#">
                  For Artists
                </a>
              </li>
              <li>
                <a className="text-white hover:text-primaryLight" href="#">
                  Developers
                </a>
              </li>
              <li>
                <a className="text-white hover:text-primaryLight" href="#">
                  Press
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full ">
            <h2 className="title-font font-bold text-gray-200 tracking-widest text-md mb-3">
              USEFUL LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-primaryLight" href="#">
                  Help
                </a>
              </li>
              <li>
                <a className="text-white hover:text-primaryLight" href="#">
                  Web Player
                </a>
              </li>
              <li>
                <a className="text-white hover:text-primaryLight" href="#">
                  Explore Chanels
                </a>
              </li>
              <li>
                <a className="text-white hover:text-primaryLight" href="#">
                  Download App
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full text-right">
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-200">
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full bg-gray-300">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </span>
              </a>
              <a className="ml-3 text-gray-200">
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full bg-gray-300">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </span>
              </a>
              <a className="ml-3 text-gray-200">
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full bg-gray-300">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </span>
              </a>
            </span>
            <p className="text-white text-sm text-right">English (US)</p>
          </div>
        </div>
      </div>
      <div className="bg-indigo-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <div className="flex">
            <p className="mr-3 text-gray-200 text-xs">Legal</p>
            <p className="mx-3 text-gray-200 text-xs">Privacy</p>
            <p className="mx-3 text-gray-200 text-xs">Cookies</p>
            <p className="mx-3 text-gray-200 text-xs">Ads</p>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-start">
            <p className="text-gray-200 text-sm text-left">
              &copy; 2019 - {new Date().getFullYear()}
              <a
                href="/z"
                rel="noopener noreferrer"
                className="ml-1"
                target="_blank"
              >
                MusicBox
              </a>
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
}
