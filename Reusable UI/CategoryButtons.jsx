import React from "react";
import { NavLink } from "react-router-dom";

const CategoryButtons = () => {

    return (
        <div className="grid my-24 mx-20 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 justify-center">
            <button               
             className="text-white text-center font-semibold text-base bg-blue-500 px-4 py-1 rounded-full">
            <NavLink to='/technology'>Technology</NavLink>
            </button>
            <button 
            className="text-white text-center font-semibold text-base bg-green-600 px-5 py-1 rounded-full">
            <NavLink to='/business'>Business</NavLink>
            </button>
            <button 
             className="text-white text-center font-semibold text-base bg-red-500 px-4 py-1 rounded-full">
            <NavLink to='/entertainment'>Entertainment</NavLink>
            </button>
            <button           
            className="text-white text-center font-semibold text-base bg-purple-500 px-5 py-1 rounded-full">
            <NavLink to='/health'>Health</NavLink>
            </button>
            <button            
             className="text-white text-center font-semibold text-base bg-indigo-500 px-5 py-1 rounded-full">
            <NavLink to='/science'>Science</NavLink>
            </button>
            <button           
             className="text-white text-center font-semibold text-base bg-cyan-500 px-5 py-1 rounded-full">
            <NavLink to='/sports'>Sports</NavLink>
            </button>
            <button            
             className="text-white text-center font-semibold text-base bg-teal-500 px-5 py-1 rounded-full">
            <NavLink to='/general'>General</NavLink>
            </button>
        </div>
    );
};

export default CategoryButtons;
