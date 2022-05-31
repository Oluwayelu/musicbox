/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function MusicSection() {
  return (
    <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 md:py-20 h-screen  flex flex-col-reverse lg:flex-row items-center justify-center">
      <div className="lg:w-1/2 text-white">
        <h1 className="text-2xl md:text-4xl font-bold">
          Find the music you want
        </h1>
        <p className="lg:w-2/3 mt-5  text-left text-xl md:font-thin">
          Search for your favorite songs using the description, or turn on the{" "}
          <span className="text-primary-200 font-medium">MusicFinder</span>{" "}
          feature to find the song that is playing near you.
        </p>
      </div>
      <div className="w-full lg:w-1/2 h-80 lg:h-full relative flex justify-center items-center">
        <Image layout="fill" src="/svg/single-phone.svg" alt="phone" />
      </div>
    </div>
  );
}
