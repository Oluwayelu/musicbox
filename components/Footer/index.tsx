/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-5 md:px-20 py-5 md:py-10 bg-gray-700 flex flex-col space-y-10">
      <div className="w-full flex flex-col md:flex-row items-start md:space-x-20">
        <Image src="/logo.svg" height={100} width={120} alt="logo" />
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3">
          <div className="inline-flex flex-col space-y-2">
            <h2 className="title-font font-bold text-gray-200 tracking-widest text-md">
              MUSICBOX
            </h2>
            <a className="text-white hover:text-primary-200" href="#">
              About
            </a>
            <a className="text-white hover:text-primary-200" href="#">
              Premium
            </a>
            <a className="text-white hover:text-primary-200" href="#">
              Features
            </a>
          </div>
          <div className="inline-flex flex-col space-y-2">
            <h2 className="title-font font-bold text-gray-200 tracking-widest text-md">
              COMMUNITIES
            </h2>
            <a className="text-white hover:text-primary-200" href="#">
              For Artists
            </a>
            <a className="text-white hover:text-primary-200" href="#">
              Developers
            </a>
            <a className="text-white hover:text-primary-200" href="#">
              Press
            </a>
          </div>
          <div className="mt-10 md:mt-0 inline-flex flex-col space-y-2">
            <h2 className="title-font font-bold text-gray-200 tracking-widest text-md">
              USEFUL LINKS
            </h2>
            <a className="text-white hover:text-primary-200" href="#">
              Help
            </a>
            <a className="text-white hover:text-primary-200" href="#">
              Web Player
            </a>
            <a className="text-white hover:text-primary-200" href="#">
              Explore Channels
            </a>
            <a className="text-white hover:text-primary-200" href="#">
              Download App
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0 w-full md:w-1/3 flex flex-row md:flex-col justify-between items-end md:space-y-20">
          <div className="inline-flex space-x-3">
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
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-white text-sm">English (US)</p>
            <img src="/icons/down.svg" alt="down" className="hidden md:block" />
            <img src="/icons/right.svg" alt="right" className="md:hidden" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between text-gray-200 text-xs md:text-sm">
        <div className="flex space-x-3 ">
          <p>Legal</p>
          <p>Privacy</p>
          <p>Cookies</p>
          <p>Ads</p>
        </div>
        <div className="flex space-x-1">
          <p>&copy; 2019 - {new Date().getFullYear()}</p>
          <Link href="/">MusicBox</Link>
        </div>
      </div>
    </footer>
  );
}
