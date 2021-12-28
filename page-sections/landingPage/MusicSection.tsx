import React from "react";
import Image from "next/image";

export default function MusicSection() {
  return (
    <div className="px-5 md:px-40 py-10 md:py-20 max-h-screen flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="md:w-1/2">
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          Find the music you want
        </h1>
        <p className="mt-5 text-white text-left text-lg md:font-thin">
          Search for your favorite songs using the description,{" "}
          <br className="md:inline-block hidden" /> or turn on the{" "}
          <span className="text-primary-200">MusicFinder</span> feature to find
          the song <br className="md:inline-block hidden" /> that is playing
          near you.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/svg/single-phone.svg"
          layout="responsive"
          width={200}
          height={200}
          alt="phone"
        />
      </div>
    </div>
  );
}
