import React from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CategoryButtons from "../Reusable UI/CategoryButtons";


const Search = (props) => {
  
  return (
    <>
     <CategoryButtons/>
      <div className="flex justify-center items-center my-1">
        <div className="absolute top-16 w-3/5 md:w-3/5 lg:w-2/5 ">
          <NavLink to="/searchQuery">
            <input
              type="text"
              placeholder="Search for news"
              value={props.search}
              onChange={props.handleByChange}
              onKeyDown={props.handleKeyPress}
              className="w-full bg-gray-200 py-2 rounded-full text-center 
            font-medium focus:outline-none"
            />
          </NavLink>

          <button className="absolute right-6 top-0 h-full flex justify-center items-center text-slate-500">
            <NavLink to='/voiceBasedNews'>
            <FaMicrophone/>
            </NavLink>
          </button>
        

          <button
            onClick={props.handleBySubmit}
            className="absolute left-6 top-0 h-full flex justify-center items-center text-slate-500"
          >
            <NavLink to="/searchQuery">
              <FaSearch />
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};
export default Search;
