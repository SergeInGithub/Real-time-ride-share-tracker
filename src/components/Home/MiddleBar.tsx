import React from 'react';
import { calculateDistance, calculateETA } from '../../utils/mapCalcs';
import { intermediateStops } from '../../data/mapsData';

type IMiddleBarProps = {
  driverLocationIndex: number;
  nextStop: string;
};

export const MiddleBar = ({
  driverLocationIndex,
  nextStop,
}: IMiddleBarProps) => {
  return (
    <div className="text-black bg-white text-lg md:text-xl h-[20%] flex-col p-[2%] justify-between items-center flex absolute w-full top-[10%]">
      <div className="flex items-center justify-between w-full h-full text-2xl font-semibold">
        <h5>
          {intermediateStops[0].name} to{' '}
          {intermediateStops[intermediateStops.length - 1].name}
        </h5>
      </div>
      <div className="flex items-center justify-between w-full h-full">
        <h5>Next stop: {nextStop}</h5>
      </div>
      <div className="flex flex-col items-start justify-between w-full h-full">
        <h5>
          Distance:
          {calculateDistance(
            intermediateStops[driverLocationIndex],
            intermediateStops[driverLocationIndex + 1],
          ) / 1000}{' '}
          km
        </h5>
        <h5>
          Time: {calculateETA(driverLocationIndex + 1, intermediateStops)}{' '}
          minutes
          {nextStop ? ' to' : ''} {nextStop}
        </h5>
      </div>
    </div>
  );
};
