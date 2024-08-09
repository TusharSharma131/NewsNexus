import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { NavLink } from "react-router-dom";
import '../../App.css';
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const { isLoggedIn, LogoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    LogoutUser();
    setShowMenu(false);  // Close the menu on logout
  };

  const handleHeadlinesClick = () => {
    if (isLoggedIn) {
      navigate('/headlines');
    } else {
      toast.error("Please login before accessing the website");
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between py-3 px-5">
        <div>
          <span className="font-bold text-blue-500 text-xl mr-2">
            NewsNexus
          </span>
        </div>

        <button
          className={`text-base bg-gray-300 font-medium lg:mr-40 py-1 px-2 mx-1 md:mx-2 lg:mx-2 rounded-full`}
          onClick={handleHeadlinesClick}>
          Headlines
        </button>

        <button className="relative sm:left-48 md:mr-64 lg:left-64 lg:ml-64 xl:ml-80 xl:left-72 py-2 px-3 bg-gray-300 rounded-full"
          onClick={props.toggleMode}>
          {props.mode === 'light' ? <MdWbSunny /> : <MdDarkMode/>}
        </button>

        <div className="hidden lg:flex lg:justify-end">
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className={`text-${props.mode === 'light' ? 'black' : 'light'} text-base font-medium py-2 px-3 ml-4 bg-gray-300 rounded-full`}
            >
              <NavLink to="/">Log Out</NavLink>
            </button>
          ) : (
            <>
              <button className={`text-${props.mode === 'light' ? 'black' : 'light'} text-base font-medium py-2 px-3 bg-gray-300 rounded-full`}>
                <NavLink to='/register'>Register</NavLink>
              </button>
              <button className={`text-${props.mode === 'light' ? 'black' : 'light'} text-base font-medium py-2 px-3 ml-4 bg-gray-300 rounded-full`}>
                <NavLink to='/'>Log In</NavLink>
              </button>
            </>
          )}
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`flex items-center px-3 py-2 border rounded text-${props.mode === 'light' ? 'black' : 'white'} border-${props.mode === 'light' ? 'black' : 'white'}`}
          >
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>
          {showMenu && (
            <div className="absolute right-0 top-8 flex flex-col items-center p-4">
              {isLoggedIn ? (
                <button 
                  onClick={handleLogout}
                  className={`text-${props.mode === 'light' ? 'black' : 'white'} text-base font-bold py-1 px-1`}
                >
                  <NavLink to="/">Log Out</NavLink>
                </button>
              ) : (
                <>
                  <button className={`text-${props.mode === 'light' ? 'black' : 'white'} text-base font-bold  px-1`}>
                    <NavLink to='/'>Log In</NavLink>
                  </button>
                  <button className={`text-${props.mode === 'light' ? 'black' : 'white'} text-base font-bold py-1 px-3`}>
                    <NavLink to='/register'>Register</NavLink>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;