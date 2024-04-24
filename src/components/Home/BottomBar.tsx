import React from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import { FaRegBell, FaRegHeart } from 'react-icons/fa6';

export const BottomBar = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 to-green-500 h-[10%] absolute w-full top-[90%] flex justify-between items-center p-[2%]">
      <button className="w-full h-full flex justify-center items-center">
        <FaRegHeart className="w-6 h-6" />
      </button>
      <button className="w-full h-full flex justify-center items-center">
        <BsExclamationCircle className="w-6 h-6" />
      </button>
      <button className="w-full h-full flex justify-center items-center">
        <FaRegBell className="w-6 h-6" />
      </button>
    </div>
  );
};
