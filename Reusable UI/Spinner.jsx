import React from 'react';
import spinnerImage from './../Images/spinner.gif'

const Spinner = () =>{
   return(
    <>
     <div className="absolute top-96 md:top-40 lg:top-40 xl:top-24 2xl:top-80 2xl:mt-7 mt-80 left-44 md:left-2/4 2xl:left-1/3 2xl:ml-48 ">
      <img src={spinnerImage} alt="Loading spinner" className="w-10 h-10"/>
    </div>
    </>
   )
}
export default Spinner;