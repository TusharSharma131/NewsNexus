import React from 'react';
import Lottie from 'react-lottie';
import LoginAnimation from '../Images/Animation - 1712319827714.json';
import googleIcon from '../Images/google-color-icon.svg'
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

const LogIn = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoginAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <div className='grid place-items-center relative top-24 sm:top-16 lg:top-14 xl:top-10'>
        <div className={`w-full lg:w-3/4 xl:w-2/4 grid grid-cols-1 sm:grid-cols-2 ${props.mode === 'dark' ? 'bg-black' : 'bg-slate-200'  } shadow-lg shadow-gray-400 rounded-md`}>
          <div className='py-4 px-10 lg:px-8'>
            <div className={`pl-14 pr-14 sm:pl-14 md:pr-28 lg:pr-16 xl:pl-10 pb-6 text-center text-3xl lg:text-3xl font-semibold ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Log In</div>
            <div className={`font-bold text-2xl lg:text-xl pt-3 pb-4 ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Welcome Buddy! 👋</div>
            <div className={`font-semibold text-lg lg:text-xs ${props.mode === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
              Please enter login details below
            </div>
            <div className={`text-lg sm:text-sm md:text-sm lg:text-xs font-semibold pt-6 pb-2 ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>
              Email
            </div>
        <div className="relative">
        <input
          type='email'
          autoComplete='on'
          autoSave='on'
          required
          placeholder='Type your email'
          className='text-center rounded-md text-lg sm:text-sm md:text-sm lg:text-xs py-2 pl-10 border outline-none border-gray-300 px-12 sm:px-16'
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoMdMail className="text-gray-400" />
        </div>
        </div>
            <div className={`text-lg sm:text-sm md:text-sm lg:text-xs font-semibold pt-6 pb-2 ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>
              Password
            </div>
            <div className="relative">
        <input
          type='email'
          autoComplete='on'
          autoSave='on'
          required
          placeholder='Type your password'
          className='text-center rounded-md text-lg sm:text-sm md:text-sm lg:text-xs py-2 pl-10 border outline-none border-gray-300 px-12 sm:px-16'
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <RiLockPasswordFill className="text-gray-400" />
        </div>
        </div>
            <div className={`flex justify-start font-medium text-md lg:text-xs pl-40 lg:pl-44 xl:pl-44 py-3 ${props.mode === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
              Forgot Password?
            </div>
            <button className={`${props.mode === 'dark' ? 'bg-white' : 'bg-black'} ml-2 lg:ml-6  xl:ml-5 mt-2 rounded-md ${props.mode === 'dark' ? 'text-black' : 'text-white'} font-bold text-lg sm:text-sm md:text-sm lg:text-xs py-2 px-28 lg:px-24`}>
              Log in
            </button>
            <div className='py-4 lg:pl-6 pl-4'>
              <hr className='border border-gray-300 w-28 sm:w-32 md:w-28 lg:w-24 inline-block mb-1' />
              <span className='text-gray-400 text-lg sm:text-sm md:text-sm lg:text-xs font-semibold px-2'>
                or
              </span>
              <hr className='border border-gray-300 w-28 sm:w-32 md:w-28 lg:w-24 inline-block mb-1' />
            </div>
            <button className='bg-gray-300 text-black font-semibold rounded-md text-base sm:text-sm md:text-sm lg:text-xs py-2 px-16 sm:ml-1 lg:ml-5 sm:px-16 lg:px-12'>
            <img src={googleIcon} alt='Google Icon' className='w-6 h-6 mr-2 inline-block' />
             Log in with Google
             </button>
            <div className={`${props.mode === 'dark' ? 'text-gray-300' : 'text-gray-500'} font-semibold text-base sm:text-sm md:text-sm lg:text-xs py-4 sm:pl-9 lg:pl-12 pl-8`}>
              Don't have an account? <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Sign Up</span>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Lottie options={defaultOptions} height={400} width={200} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;