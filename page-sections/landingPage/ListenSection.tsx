/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ListenSection() {
  return (
    <section className="min-h-screen  text-white ">
      <div className="lg:flex  hidden bg-gray-500 bg-no-repeat bg-cover relative items-center">
        <img
          src="/background/listen.svg"
          alt=""
          className="absolute w-full inset-0 z-0"
        />
        <div className="absolute bg-gray-600 opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10 text-primaryLight">
          <div className="px-5 md:px-40 max-h-screen flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="">
              <h1 className="text-white text-4xl font-bold">
                Find the music you want
              </h1>
              <p className="mt-5 text-white text-left text-lg md:font-thin">
                Search for your favorite songs using the description,{" "}
                <br className="md:inline-block hidden" /> or turn on the{" "}
                <span className="text-primaryLight">MusicFinder</span> feature
                to find the song <br className="md:inline-block hidden" /> that
                is playing near you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
