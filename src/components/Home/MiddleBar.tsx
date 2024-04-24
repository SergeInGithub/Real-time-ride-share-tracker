import React from 'react';

export const MiddleBar = () => {
  return (
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
  );
};
