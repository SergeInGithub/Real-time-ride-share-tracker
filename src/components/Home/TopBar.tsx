import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

export const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 to-green-500 h-[10%] absolute w-full flex p-[2%] justify-between items-center">
      <div className="w-[15%] h-full flex justify-center items-center">
        <RxHamburgerMenu className="w-6 h-6" />
      </div>
      <div className="text-gray-700 w-[30%] h-full text-center flex justify-center items-center text-3xl font-semibold">
        <h2>Startup</h2>
      </div>
    </div>
  );
};
