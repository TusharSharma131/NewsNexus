import React, { useState } from 'react';
import LoginImage from "../Images/LoginImage.png"
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import {NavLink} from "react-router-dom";
import { useAuth } from "../store/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const LogIn = (props) => {
  
  const {storeTokenInLS} = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
     email : "",
     password : "",
  });

  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name] : value,
    });
  }

  const handleSubmit = async(e) =>{
      e.preventDefault();

      try{
          const response = await fetch(`https://newsnexus-server-1.onrender.com/api/auth/login`,
          {
            method : "POST",
            headers : {
              "Content-Type" : "application/json",
            },
            body : JSON.stringify(user)
          });
  
          if(response.ok)
          {
            setUser({
              email : "",
              password : "",
            });
            toast.success("Login Successful !!");
            const res_data = await response.json();
            storeTokenInLS(res_data.token);
            navigate("/headlines")
          }else{
            const errorData = await response.json();
            toast.error(`Failed to Login: ${errorData.extraDetails ? errorData.extraDetails : errorData.message}`);
          }
      }catch(err)
      {
        console.log("Error during login", err);
        toast.error("An error occurred. Please try again.")
      }

    }

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

            <form onSubmit={handleSubmit}>
            <div className={`text-lg sm:text-sm md:text-sm lg:text-xs font-semibold pt-6 pb-2 ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>
              Email
            </div>
        <div className="relative">
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={handleInput}
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
          type='password'
          name='password'
          value={user.password}
          onChange={handleInput}
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
  
            <button className={`${props.mode === 'dark' ? 'bg-white' : 'bg-black'} ml-2 lg:ml-6  xl:ml-5 mt-2 rounded-md ${props.mode === 'dark' ? 'text-black' : 'text-white'} font-bold text-lg sm:text-sm md:text-sm lg:text-xs py-2 mt-7 px-28 lg:px-24`}>
              Log in
            </button>
            </form>
            
            <div className={`${props.mode === 'dark' ? 'text-gray-300' : 'text-gray-500'} font-semibold text-base sm:text-sm md:text-sm lg:text-xs py-4 sm:pl-9 lg:pl-12 pl-8`}>
              Don't have an account? <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}><NavLink to="/register">Register</NavLink></span>
            </div>
          </div>
          <div className='flex justify-center items-center'>
          <img src={LoginImage} height={400} width={400} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;