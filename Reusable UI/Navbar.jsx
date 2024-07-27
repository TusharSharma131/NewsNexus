import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { NavLink } from "react-router-dom";
import '../../App.css';

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between py-3 px-5">
        <div>
          <span className="font-bold text-blue-500 text-xl mr-4">
            NewsNexus
          </span>
          <NavLink to='/' className="nav-link">
          <button className={`text-base font-medium py-1 px-2 mx-1 md:mx-2 lg:mx-4 rounded-full`}>
            Home
          </button>
           </NavLink>

        </div>

          <button className="relative sm:left-48 md:mr-64 lg:left-64 lg:ml-64 py-2 px-3 bg-gray-300 rounded-full"
          onClick={props.toggleMode}>
             {props.mode === 'light' ? <MdWbSunny/> : <MdDarkMode/>}
          </button>

        {/* <div className="block lg:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`flex items-center px-3 py-2 border rounded text-white text-${props.mode === 'light' ? 'dark' : 'light'} border-${props.mode === 'light' ? 'dark' : 'light'} hover:text-white hover:border-white`}
          >
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>
          {showMenu && (
            <div className="absolute right-0 top-14 flex flex-col items-center ">
              <button className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-xl font-bold py-1 px-1`}>
                Log in
              </button>
              <button className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-xl font-bold py-2 px-3`}>
                Sign in
              </button>
            </div>
          )}
        </div>
        <div className="hidden lg:flex lg:justify-end">
          <button className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-base font-medium py-2 px-3 bg-gray-300 
          rounded-full`}>
            Log in
          </button>
          <button className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-base font-medium py-2 px-3 ml-4 bg-gray-300 rounded-full`}>
            Sign in
          </button>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
