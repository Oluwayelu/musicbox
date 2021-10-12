import React from "react";
import Image from "next/image";

export default function PremiumSection() {
  return (
    // <div className="px-40 h-screen">
    //   <div className="text-center">
    //     <h1 className="text-white text-4xl font-bold">Why go Premium?</h1>
    //   </div>
    //   <div className="flex items-center justify-center mt-10 space-x-4">
    //     <div className="text-center">
    //       <Image
    //         src="/icons/arrow-down.svg"
    //         height={100}
    //         width={100}
    //         alt="arrow-down"
    //         className="mx-5"
    //       />
    //       <h3 className="text-white text-4xl text-center">Offline mood</h3>
    //       <p className="text-gray-200 text-xl">Save and listen anywhere.</p>
    //     </div>
    //     <div className="text-center">
    //       <Image
    //         src="/icons/hq.svg"
    //         height={100}
    //         width={100}
    //         alt="arrow-down"
    //       />
    //       <h3 className="text-white text-4xl text-center">
    //         High quality audio.
    //       </h3>
    //       <p className="text-gray-200 text-xl">
    //         Enjoy the full range of sound.
    //       </p>
    //     </div>

    //     <div className="text-center">
    //       <Image
    //         src="/icons/ads.svg"
    //         height={100}
    //         width={100}
    //         alt="arrow-down"
    //       />
    //       <h3 className="text-white text-4xl text-center">No ads.</h3>
    //       <p className="text-gray-200 text-xl">Enjoy nonstop music.</p>
    //     </div>
    //     <div className="text-center">
    //       <Image
    //         src="/icons/next.svg"
    //         height={100}
    //         width={100}
    //         alt="arrow-down"
    //       />
    //       <h3 className="text-white text-4xl text-center">Unlimited skips.</h3>
    //       <p className="text-gray-200 text-xl">Just tap skip.</p>
    //     </div>
    //   </div>

    //   <div className="mt-20">
    //     <div className="text-center">
    //       <h1 className="text-white text-4xl font-thin">
    //         Listen free or subscribe to MusicBox Premium.
    //       </h1>
    //     </div>
    //     <div className="flex  justify-between px-10">
    //       <div className="mt-5 ">
    //         <div className="border-2 border-white rounded-2xl">
    //           <div>
    //             <p className="text-white text-4xl text-left font-bold">
    //               MusicBox Free
    //             </p>
    //             <p>$0.00/month</p>
    //           </div>
    //           <div className="mt-5">
    //             <div>
    //               <p>Online listening</p>
    //             </div>
    //             <div>
    //               <p>Regular audio</p>
    //             </div>
    //             <div>
    //               <p>With advertising</p>
    //             </div>
    //             <div>
    //               <p>30 skips per day</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-5 border-2 border-white rounded-full px-10 py-1 text-white text-center">
    //           GET MUSICBOX FREE
    //         </div>
    //       </div>
    //       <div className="mt-5">
    //         <div className=" border-2 border-white rounded-2xl">
    //           <div>
    //             <p className="text-white text-4xl text-left font-bold">
    //               MusicBox Premium
    //             </p>
    //             <p>$7.99/month</p>
    //             <span>Start with 1-month free trial*</span>
    //           </div>
    //           <div className="mt-5">
    //             <div>
    //               <p>Offline mode</p>
    //             </div>
    //             <div>
    //               <p>High quality audio</p>
    //             </div>
    //             <div>
    //               <p>No ads</p>
    //             </div>
    //             <div>
    //               <p>Unlimited skips</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-5 rounded-full px-10 py-2 text-white text-center bg-gradient-to-r from-primaryLight to-secondary">
    //           GET MUSICBOX PREMIUM
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="px-5 md:px-40 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl sm:text-4xl font-bold">
        Why go Premium?
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="mt-5 flex flex-row justify-between">
          <Image
            src="/icons/arrow-down.svg"
            height={60}
            width={60}
            alt="arrow-down"
          />
          <div className="flex flex-col">
            <h3 className="text-white text-xl">Offline mood</h3>
            <p className="text-gray-200 text-xl">Save and listen anywhere.</p>
          </div>
        </div>
        <div className="mt-5 flex flex-row justify-between">
          <Image
            src="/icons/arrow-down.svg"
            height={60}
            width={60}
            alt="arrow-down"
          />
          <div className="flex flex-col">
            <h3 className="text-white text-xl">Offline mood</h3>
            <p className="text-gray-200 text-xl">Save and listen anywhere.</p>
          </div>
        </div>
        <div className="mt-5 flex flex-row justify-between">
          <Image
            src="/icons/arrow-down.svg"
            height={60}
            width={60}
            alt="arrow-down"
          />
          <div className="flex flex-col">
            <h3 className="text-white text-xl">Offline mood</h3>
            <p className="text-gray-200 text-xl">Save and listen anywhere.</p>
          </div>
        </div>
      </div>

      <div>
        <div className="p-10 border-2 border-white rounded-2xl">
          <div>
            <p className="text-white text-4xl text-left font-bold">
              MusicBox Free
            </p>
            <p>$0.00/month</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primaryLight to-secondary">
          <div className="p-2 bg-white">
            <p className="text-white text-4xl text-left font-bold">
              MusicBox Free
            </p>
            <p>$0.00/month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
