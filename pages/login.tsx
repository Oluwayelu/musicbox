/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "../components";

const Login: NextPage = () => {
  return (
    <Parallax
      title="Music Box: Login to Music Box"
      description="Login to your MusicBox account"
    >
      <div className="p-5 rounded-xl bg-white text-center">
        <div className="flex justify-end">
          <Link href="/" passHref>
            <Image
              src="/icons/cancel.svg"
              alt="cancel"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className="md:px-16">
          <h1 className="text-xl md:text-2xl text-gray-600 font-bold">
            What will you listen to today?
          </h1>
          <div className="my-5 flex items-center justify-center space-x-3">
            <div className="w-36 md:w-44 px-3 py-1 flex items-center justify-between rounded-full bg-facebook">
              <Image
                src="/icons/facebook.svg"
                alt="facebook logo"
                width={20}
                height={20}
              />
              <p className="text-white">Facebook</p>
              <div />
            </div>
            <div className="w-36 md:w-44 px-3 py-1 flex items-center justify-between rounded-full border">
              <Image
                src="/icons/google.svg"
                alt="google logo"
                width={20}
                height={20}
              />
              <p>Google</p>
              <div />
            </div>
          </div>
          <div className="my-3 space-y-5">
            <input
              className="p-3 border border-primary-400 appearance-none rounded-md w-full focus:border-primary-400 focus:outline-none active:outline-none active:border-primary-200 focus:bg-primary-100"
              id="email"
              type="text"
              placeholder="Email address or username"
            />
            <input
              className="p-3 border border-primary-400 appearance-none rounded-md w-full focus:border-primary-400 focus:outline-none active:outline-none active:border-primary-200 focus:bg-primary-100"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember_me"
                id=""
                className="mr-3 h-5 w-5"
              />
              <label
                htmlFor="remember_me"
                className=" leading-tighter text-gray-600 text-md cursor-text"
              >
                Remember me
              </label>
            </div>
            <button className="px-10 py-1 mt-5 md:mt-0 text-center text-white text-xl font-bold bg-primary-400 rounded-full">
              Log In
            </button>
          </div>
          <p className="my-5 text-center text-primary-400">
            Forgot your password?
          </p>

          <p className="mt-10 text-center text-lg text-gray-600">
            Don't have an account
          </p>
          <div className="my-3 text-center">
            <Link href="/signup" passHref>
              <button className="w-full py-1 text-gray-600 text-lg md:text-xl font-bold border-2 border-gray-600 rounded-full">
                Sign Up for MusicBox
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Login;
