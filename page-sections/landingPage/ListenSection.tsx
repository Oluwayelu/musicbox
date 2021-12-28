/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ListenSection() {
  return (
    <section className="h-80 md:h-50vh relative text-white ">
      <img
        src="/images/listen.png"
        alt=""
        className="absolute w-full h-full filter object-cover object-center"
      />
      <div className="absolute bg-gray-600 opacity-60 inset-0 z-0" />
      <div className="flex items-center justify-start px-5 md:px-20 inset-0 absolute z-20">
        <div className="w-1/2">
          <h1 className="text-white text-xl md:text-4xl font-bold">
            Listen anytime, anywhere
          </h1>
          <p className="mt-5 text-white text-left text-base md:text-xl md:font-thin">
            All your favorite songs and episodes are always <br /> available -
            even without WiFi or LTE.
          </p>
        </div>
      </div>
    </section>
  );
}
