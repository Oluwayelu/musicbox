/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export default function FlowSection() {
  return (
    <div className="px-5 md:px-40 py-10 md:py-20 max-h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2">
        <Image
          src="/images/phone1.png"
          layout="responsive"
          width={200}
          height={200}
          alt="phone"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify- space-y-5">
        <div className="flex space-x-2 items-center">
          <img src="/icons/flow.svg" alt="flow" className="w-10 sm:w-20" />
          <h1 className="text-white text-2xl sm:text-4xl font-bold">Flow</h1>
        </div>
        <p className="text-white text-left text-lg md:font-thin">
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
