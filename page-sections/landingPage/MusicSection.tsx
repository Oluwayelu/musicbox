import React from "react";
import Image from "next/image";

export default function MusicSection() {
  return (
    // <div className="px-40">
    //   <div className="flex flex-wrap items-center justify-between">
    //     <div className="w-full md:w-6/12 px-4">
    //       <div className="relative flex flex-col mt-4">
    //         <div className="px-4 py-5 flex-auto">
    //           <div className="flex items-center">
    //             <h2 className="text-white text-left text-4xl font-bold">
    //               Find the music you want
    //             </h2>
    //           </div>
    //           <p className="mt-5 text-white text-left text-xl font-thin">
    //             Search for your favorite songs using the description, <br /> or
    //             turn on the{" "}
    //             <span className="text-primaryLight">MusicFinder</span> feature
    //             to find the song <br /> that is playing near you.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
    //       <Image
    //         src="/svg/single-phone.svg"
    //         width={700}
    //         height={700}
    //         alt="phone"
    //         layout="fixed"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="mb-10 px-5 md:px-40 max-h-screen flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="">
        <h1 className="text-white text-2xl sm:text-4xl font-bold">
          Find the music you want
        </h1>
        <p className="mt-5 text-white text-left text-lg md:font-thin">
          Search for your favorite songs using the description,{" "}
          <br className="md:inline-block hidden" /> or turn on the{" "}
          <span className="text-primaryLight">MusicFinder</span> feature to find
          the song <br className="md:inline-block hidden" /> that is playing
          near you.
        </p>
      </div>
      <Image
        src="/svg/single-phone.svg"
        width={700}
        height={700}
        alt="phone"
        className="mr-5"
      />
    </div>
  );
}
