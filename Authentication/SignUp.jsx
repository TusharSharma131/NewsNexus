import React from "react";
import Lottie from "react-lottie";
import SignUpAnimation from "../../Server/Component/Images/Animation - 1712232773280.json";

const SignUp = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SignUpAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="grid place-items-center relative top-20 md:top-44 lg:top-60 xl:top-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full sm:w-full md:w-full lg:w-3/4 xl:w-2/4 bg-slate-200 rounded-md shadow-lg shadow-gray-400">
          <div className="px-11 sm:px-12 md:pl-10 lg:pl-6">
            <div className="pl-14 pr-14 sm:pl-0 md:pr-28 lg:pr-16 xl:pl-10 pt-2 text-center text-2xl lg:text-3xl font-semibold">
              Sign Up
            </div>
            <div className="text-lg sm:text-sm md:text-sm lg:text-xs font-semibold pt-4 pb-2">
              Username
            </div>
            <input
              type="text"
              name="fName"
              required
              autoComplete="on"
              autoSave="on"
              placeholder="Type your username"
              className="text-center rounded-md text-lg sm:text-sm md:text-sm lg:text-xs py-1 border outline-none border-gray-300 
        px-12"
            />

            <div className="text-lg sm:text-sm md:text-sm lg:text-xs font-semibold pt-6 pb-2">
              Email
            </div>
            <input
              type="email"
              name="email"
              required
              autoComplete="on"
              autoSave="on"
              placeholder="Type your email"
              className="text-center rounded-md text-lg sm:text-sm md:text-sm lg:text-xs py-1 border outline-none border-gray-300 
        px-12"
            />

            <div className="text-lg sm:text-sm md:text-sm lg:text-xs font-semibold pt-6 pb-2">
              Password
            </div>
            <input
              type="password"
              name="password"
              required
              autoComplete="on"
              autoSave="on"
              placeholder="Type your password"
              className="text-center rounded-md text-lg sm:text-sm md:text-sm lg:text-xs py-1 border border-gray-300 outline-none px-12"
            />

            <div className="text-lg sm:text-sm md:text-sm lg:text-xs font-semibold pt-6 pb-2">
              Confirm Password
            </div>
            <input
              type="password"
              name="confirmPassword"
              required
              autoComplete="on"
              autoSave="on"
              placeholder="Confirm your password"
              className="text-center rounded-md text-lg sm:text-sm md:text-sm lg:text-xs py-1 border border-gray-300 outline-none px-12"
            />

            <div className="text-xs text-gray-400 font-semibold sm:pr-2 pt-4 pb-4">
              <input
                type="checkbox"
                required
                className="mr-2 text-lg sm:text-sm md:text-sm lg:text-xs"
              />
              I agree with <span className="text-black">Term and Policy</span>
            </div>

            <div className="pl-6 lg:pl-4 md:pl-6">
              <button
                className="bg-black rounded-md text-white font-semibold text-lg sm:text-sm md:text-sm lg:text-xs py-2 
        px-16 md:px-16 lg:px-16"
              >
                Create Account
              </button>
            </div>

            <div className="py-4 pl-5 lg:pl-3">
              <hr className="border border-gray-300 w-28 sm:w-28 md:w-28 lg:w-24 inline-block mb-1" />
              <span
                className="text-gray-400 text-lg sm:text-sm md:text-sm lg:text-xs 
        font-semibold px-2"
              >
                or
              </span>
              <hr className="border border-gray-300 w-28 sm:w-28 md:w-28 lg:w-24 inline-block mb-1" />
            </div>

            <div className="pl-4 md:pl-2">
              <button
                className="bg-gray-300 text-black font-semibold rounded-md text-base 
          sm:text-sm md:text-sm lg:text-xs py-2 
          px-14 md:px-14 lg:px-14"
              >
                Continue with Google
              </button>
            </div>

            <div className="text-gray-400 font-semibold text-base sm:text-sm md:text-sm lg:text-xs py-4 px-6 sm:px-8 md:px-7 lg:px-8">
              Already have an account?{" "}
              <span className="text-black"> Log in</span>
            </div>
          </div>

          <div
            className="flex md:justify-center md:items-center lg:justify-center 
        lg:items-center"
          >
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
