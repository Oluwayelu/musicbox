/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "../components";

const Signup: NextPage = () => {
  return (
    <Parallax
      title="Music Box: Sign up to Music Box"
      description="Create an account on MusicBox"
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
            Ready to Sign up?
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
              className="w-full p-3 border border-primary-400 appearance-none rounded-md focus:border-primary-400 focus:outline-none active:outline-none active:border-primary-200 focus:bg-primary-100"
              id="email"
              type="email"
              placeholder="Email address"
            />
            <input
              className="p-3 border border-primary-400 appearance-none rounded-md w-full focus:border-primary-400 focus:outline-none active:outline-none active:border-primary-200 focus:bg-primary-100"
              id="password"
              type="password"
              placeholder="Password"
            />
            <input
              className="p-3 border border-primary-400 appearance-none rounded-md w-full focus:border-primary-400 focus:outline-none active:outline-none active:border-primary-200 focus:bg-primary-100"
              id="username"
              type="text"
              placeholder="Username"
            />
            <div className="flex space-x-3">
              <input
                className="p-3 border border-primary-400 appearance-none rounded-md w-full focus:border-primary-400 focus:outline-none active:outline-none active:border-primary-200 focus:bg-primary-100"
                id="dob"
                type="date"
                placeholder="Date of Birth"
              />
              <select
                className="p-3 border border-primary-400 appearance-none rounded-md w-full focus:border-primary-400 focus:outline-none active:outline-none active:border-primary-200 focus:bg-primary-100"
                defaultValue={0}
                title="Gender"
                id="gender"
                placeholder="Gender"
              >
                <option value={0}>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="font-base">
              <p>By clicking on "Sign up", you accept the</p>
              <p className="text-primary-400">Terms and Conditions of Use.</p>
            </div>
            <button className="w-full py-2 text-center text-white text-xl font-bold bg-primary-400 rounded-full uppercase">
              Sign up
            </button>
          </div>
          <div className="font-base">
            <p>
              Already have an account?{" "}
              <Link href="/login">
                <a className="text-primary-400 font-bold">Log in</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Signup;
