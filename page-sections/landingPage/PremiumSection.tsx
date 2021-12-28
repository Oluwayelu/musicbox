/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Button } from "../../components";

export default function PremiumSection() {
  return (
    <div className="px-5 md:px-40 py-10 min-h-screen flex flex-col items-center justify-center space-y-5">
      <h1 className="text-white text-2xl sm:text-4xl font-bold">
        Why go Premium?
      </h1>
      <div className="w-full flex flex-col md:flex-row md:justify-center space-y-3 md:space-x-5">
        <div className="flex items-center md:text-center md:flex-col justify-start space-x-3">
          <div className="w-20 h-20 p-2 rounded-full bg-gray-500">
            <Image
              src="/icons/download.svg"
              width={100}
              height={100}
              alt="arrow-down"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-xl">Offline mood</h3>
            <p className="text-gray-200 text-xl">Save and listen anywhere.</p>
          </div>
        </div>
        <div className="flex items-center md:text-center md:flex-col justify-start space-x-3">
          <div className="w-20 h-20 p-2 rounded-full bg-gray-500">
            <Image
              src="/icons/hq.svg"
              width={100}
              height={100}
              alt="arrow-down"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-xl">High quality audio.</h3>
            <p className="text-gray-200 text-xl">
              Enjoy the full range of sound.
            </p>
          </div>
        </div>
        <div className="flex items-center md:text-center md:flex-col justify-start space-x-3">
          <div className="w-20 h-20 p-2 rounded-full bg-gray-500">
            <Image
              src="/icons/ads.svg"
              width={100}
              height={100}
              alt="arrow-down"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-xl">No ads.</h3>
            <p className="text-gray-200 text-xl">Enjoy nonstop music.</p>
          </div>
        </div>
        <div className="flex items-center md:text-center md:flex-col justify-start space-x-3">
          <div className="w-20 h-20 p-2 rounded-full bg-gray-500">
            <Image
              src="/icons/skip.svg"
              width={100}
              height={100}
              alt="arrow-down"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-xl">Unlimited skips.</h3>
            <p className="text-gray-200 text-xl">Just tap skip.</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 flex flex-col-reverse items-stretch md:flex-row space-y-10 md:space-x-5 md:space-y-0">
        <div className="w-full flex flex-col">
          <div className="px-7 py-5 border-2 border-white rounded-xl filter drop-shadow-xl space-y-10">
            <div>
              <p className="text-white text-2xl text-left font-bold">
                MusicBox Free
              </p>
              <h1 className="text-2xl md:text-3xl text-white mb-5 md:mb-10">
                $0.00
                <span className="text-sm">/month</span>
              </h1>
            </div>
            <div className="flex flex-col text-white space-y-3">
              <div className="flex space-x-5">
                <img src="/icons/check.svg" alt="check" />
                <p>Online listening</p>
              </div>
              <div className="flex space-x-5">
                <img src="/icons/check.svg" alt="check" />
                <p>Regular audio</p>
              </div>
              <div className="flex space-x-5">
                <img src="/icons/check.svg" alt="check" />
                <p>With advertising</p>
              </div>
              <div className="flex space-x-5">
                <img src="/icons/check.svg" alt="check" />
                <p>30 skips per day</p>
              </div>
            </div>
          </div>
          <div className="self-center">
            <Button color="secondary">GET MUSICBOX FREE</Button>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full px-7 py-5 bg-gray-500 border-2 border-primary-200 rounded-xl filter drop-shadow-xl space-y-5">
            <div>
              <p className="text-white text-2xl">MusicBox Premium</p>
              <h1 className="text-2xl md:text-3xl text-primary-200">
                $7.99
                <span className="text-sm text-white">/month</span>
              </h1>
              <p className="text-gray-200 text-sm">
                Start with 1-month free trial*
              </p>
            </div>
            <div className="flex flex-col text-white space-y-3">
              <div className="flex space-x-5">
                <img src="/icons/check-primary.svg" alt="check" />
                <p>Offline mode</p>
              </div>
              <div className="flex space-x-5">
                <img src="/icons/check-primary.svg" alt="check" />
                <p>High quality audio</p>
              </div>
              <div className="flex space-x-5">
                <img src="/icons/check-primary.svg" alt="check" />
                <p>No ads</p>
              </div>
              <div className="flex space-x-5">
                <img src="/icons/check-primary.svg" alt="check" />
                <p>Unlimited skips</p>
              </div>
            </div>
          </div>
          <div className="self-center">
            <Button color="primary">GET MUSICBOX PREMIUM</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
