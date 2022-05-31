/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export default function FlowSection() {
  return (
    <div className="px-5 md:px-10 lg:px-20 xl:px-40 h-screen lg:h-[60vh] flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full lg:w-1/2 h-80 lg:h-full relative flex justify-center items-center">
        <Image
          layout="fill"
          src="/images/phone1.png"
          alt="phone"
          className="filter object-contain object-center"
        />
      </div>
      <div className="w-full lg:w-1/2 f items-center space-y-5">
        <div className="w-full flex space-x-2 items-center">
          <Image
            width={50}
            height={50}
            src="/icons/flow.svg"
            alt="flow"
            className="w-10 sm:w-20"
          />
          <h1 className="text-white text-2xl sm:text-4xl font-bold">Flow</h1>
        </div>
        <p className="text-white text-left text-xl md:font-thin">
          Listen to a personalized mix of tracks based on your{" "}
          <br className="md:inline-block hidden" /> listening history, or create
          your own mix of genres, artists{" "}
          <br className="md:inline-block hidden" /> and playlists - letting you
          enjoy more of the music you love.
        </p>
      </div>
    </div>
  );
}
