import React from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import { FaRegBell, FaRegHeart } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen h-full relative text-white max-w-[430px]">
      <div className="bg-gradient-to-r from-cyan-400 to-green-500 h-[10%] absolute w-full flex p-[2%] justify-between items-center">
        <div className="w-[15%] h-full flex justify-center items-center">
          <RxHamburgerMenu className="w-6 h-6" />
        </div>
        <div className="text-gray-700 w-[30%] h-full text-center flex justify-center items-center text-3xl font-semibold">
          <h2>Startup</h2>
        </div>
      </div>
      <div className="text-black bg-white text-lg md:text-xl h-[20%] flex-col p-[2%] justify-between items-center flex absolute w-full top-[10%]">
        <div className="w-full h-full flex justify-between items-center font-semibold text-2xl">
          <h5>Nyabugogo - Kimironko</h5>
        </div>
        <div className="w-full h-full flex justify-between items-center">
          <h5>Next stop: Kacyiru Bus park</h5>
        </div>
        <div className="w-full h-full flex justify-between items-center">
          <h5>Distance: 23km</h5>
          <h5>Time: 23 minutes</h5>
        </div>
      </div>
      <div className="absolute w-full h-[60%] top-[30%]"></div>
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
    </div>
  );
}
