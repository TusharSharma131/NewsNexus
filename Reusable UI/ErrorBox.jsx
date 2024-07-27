import React from 'react';
import errorGIF from '../Images/errorGIF.gif';

const ErrorBox = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <img className="mb-40 w-full md:max-w-md lg:max-w-lg xl:max-w-xl" src={errorGIF} alt="Error 404, Go to Home Page" 
      />
    </div>
  );
};

export default ErrorBox;