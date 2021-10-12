/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Parallax from "../components/Parallax";

const Login: NextPage = () => {
  return (
    <Parallax
      title="Music Box: Login to Music Box"
      description="Login tp your MusicBox account"
    >
      <div className="p-5 rounded-2xl bg-white text-center">
        <h1 className="text-xl sm:text-2xl text-gray-600 font-bold">
          What will you listen to today?
        </h1>
        <div className="my-5 flex flex-col md:flex-row justify-center">
          <div className="mx-3 px-10 py-2 rounded-full bg-primary">
            Facebook
          </div>
          <div className="mx-3 px-10 py-2 rounded-full border-2 border-gray-600">
            Google
          </div>
        </div>
        <div className="my-5 relative">
          <input
            className="input border border-primary appearance-none rounded-md w-full px-3 py-3 pt-5 pb-2 focus focus:border-primary focus:outline-none active:outline-none active:border-primaryLight"
            id="email"
            type="text"
          />
          <label
            htmlFor="email"
            className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-600 text-xl cursor-text"
          >
            Email address or username
          </label>
        </div>
        <div className="my-5 relative">
          <input
            className="input border border-primary appearance-none rounded-md w-full px-3 py-3 pt-5 pb-2 focus focus:border-primary focus:outline-none active:outline-none active:border-primaryLight"
            id="email"
            type="password"
          />
          <label
            htmlFor="email"
            className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-600 text-xl cursor-text"
          >
            Password
          </label>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember_me"
              id=""
              className="mr-3 h-7 w-7"
            />
            <label
              htmlFor="remember_me"
              className=" leading-tighter text-gray-600 text-md cursor-text"
            >
              Remember me
            </label>
          </div>
          <button className="px-10 py-2 mt-5 md:mt-0 text-center text-white text-xl font-bold bg-primary rounded-full">
            Log In
          </button>
        </div>
        <p className="my-5 text-center text-primary">Forgot your password?</p>

        <p className="mt-10 text-center text-lg text-gray-600">
          Don't have an account
        </p>
        <div className="my-3 text-center">
          <button className="px-20 py-2 text-gray-600 text-lg sm:text-xl font-bold border-2 border-gray-600 rounded-full">
            Sign Up for MusicBox
          </button>
        </div>
      </div>
    </Parallax>
  );
};

export default Login;
