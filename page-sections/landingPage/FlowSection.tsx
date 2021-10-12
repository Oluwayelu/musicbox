/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export default function FlowSection() {
  return (
    <div className="px-5 py-5 md:px-40 h-full">
      <div className=" flex flex-col md:flex-row items-center justify-center">
        <Image
          src="/svg/phone.svg"
          width={600}
          height={600}
          alt="phone"
          className="mr-5"
        />
        <div className="">
          <div className="flex">
            <img src="/icons/flow.svg" alt="flow" className="w-10 sm:w-20" />
            <h1 className="text-white text-2xl sm:text-4xl font-bold">Flow</h1>
          </div>
          <p className="mt-5 text-white text-left text-lg md:font-thin">
            Listen to a personalized mix of tracks based on your{" "}
            <br className="md:inline-block hidden" /> listening history, or
            create your own mix of genres, artists{" "}
            <br className="md:inline-block hidden" /> and playlists - letting
            you enjoy more of the music you love.
          </p>
        </div>
      </div>
    </div>
  );
}
