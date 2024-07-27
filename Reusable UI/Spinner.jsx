import React from 'react';
import spinnerImage from './../Images/spinner.gif'

const Spinner = () =>{
   return(
    <>
     <div className="absolute top-80 mt-7 left-1/3 ml-48 ">
      <img src={spinnerImage} alt="Loading spinner" className="w-10 h-10"/>
    </div>
    </>
   )
}
export default Spinner;