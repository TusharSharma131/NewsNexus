import React, { useState } from 'react';
import RegisterImage from "../Images/RegisterImage.png" 
import { IoMdMail } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const Register = (props) => {
  
  const navigate = useNavigate();

  const [user, setUser] = useState({
     username : "",
     email : "",
     phone : "",
     password : "",
  });

  const handleInput = (e) => {
     let name = e.target.name;
     let value = e.target.value;

     setUser({
      ...user,
      [name] : value,
     })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        setUser({
          username: '',
          email: '',
          phone: '',
          password: ''
        });
        toast.success('Registration Successful !!');
        navigate("/");
      } else {
        // Handle error response
        const errorData = await response.json();
        toast.error(`Registration Failed: ${errorData.extraDetails ? errorData.extraDetails : errorData.message}`);
      }
    } catch (err) {
      console.error('Error during registration:', err);
      toast.error('An error occurred. Please try again.');
    } 
  }

  return (
    <>
      <div className="grid place-items-center relative top-20 md:top-44 lg:top-60 xl:top-7">
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full sm:w-full md:w-full lg:w-3/4 xl:w-2/4 ${props.mode === 'dark' ? 'bg-black' : 'bg-slate-200'} rounded-md shadow-lg shadow-gray-400`}>
          <div className="px-11 sm:px-12 md:pl-10 lg:pl-6">
            <div className={`pl-14 pr-14 sm:pl-0 md:pr-28 lg:pr-16 xl:pl-10 pt-2 text-center text-2xl lg:text-3xl font-semibold ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>
              Register
            </div>

            <form onSubmit={handleSubmit}>
            <div className={`text-lg sm:text-sm md:text-sm lg:text-xs font-semibold pt-4 pb-2 ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>
              Username
            </div>
            <div className="relative">
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleInput}
              required
              autoComplete="off"
              autoSave="off"
              placeholder="Type your username"
              className="text-center rounded-md text-lg sm:text-sm md:text-sm lg:text-xs py-2 border outline-none border-gray-300 px-12"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
             <IoMdPerson className="text-gray-400" />
            </div>
           </div>

            <div className={`text-lg sm:text-sm md:text-sm lg:text-xs font-semibold pt-6 pb-2 ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>
              Email
            </div>
 
            <div className="relative">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              required
              autoSave="off"
              autoComplete="off"
              placeholder="Type your email"
              className="text-center rounded-md text-lg sm:text-sm md:text-sm lg:text-xs py-2 border outline-none border-gray-300 px-12"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <IoMdMail className="text-gray-400" />
            </div>
          </div>

            <div className={`text-lg sm:text-sm md:text-sm lg:text-xs font-semibold pt-6 pb-2" ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>
              Phone
            </div>
            <div className="relative">
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleInput}
              required
              autoComplete="off"
              autoSave="off"
              placeholder="Type your phone no."
              className="text-center rounded-md text-lg sm:text-sm md:text-sm lg:text-xs py-2 mt-2 border border-gray-300 outline-none px-12"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-2">
             <FaPhoneAlt className="text-gray-400" />
            </div>
          </div>

            <div className={`text-lg sm:text-sm md:text-sm lg:text-xs font-semibold pt-6 pb-2 ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>
              Password
            </div>
            <div className="relative">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              required
              autoComplete="off"
              autoSave="off"
              placeholder="Type your password"
              className="text-center rounded-md text-lg sm:text-sm md:text-sm lg:text-xs py-2 border border-gray-300 outline-none px-12"
            />
             <div className="absolute inset-y-0 left-0 flex items-center pl-3">
             <RiLockPasswordFill className="text-gray-400" />
            </div>
          </div>

            <div className="pl-6 lg:pl-4 md:pl-6 mt-7" >
              <button onClick={handleSubmit}
                className={`rounded-md font-semibold text-lg sm:text-sm md:text-sm lg:text-xs py-2 px-16 md:px-16 lg:px-16 ${props.mode === 'dark' ? 'bg-white' : 
                  'bg-black'} ${props.mode === 'dark' ? 'text-black' : 'text-white'}`}
              >
                Create Account
              </button>
            </div>
            </form>

            <div className="text-gray-400 font-semibold text-base sm:text-sm md:text-sm lg:text-xs py-4 px-6 sm:px-8 md:px-7 lg:px-8">
              Already have an account?{" "}
              <span className={`${props.mode === 'dark' ? 'text-white' : 'text-black'}`}> 
                <NavLink to="/">Log in</NavLink></span>
            </div>
          </div>

          <div
            className="flex md:justify-center md:items-center lg:justify-center lg:items-center">
          
            <img src={RegisterImage} height={400} width={300} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
