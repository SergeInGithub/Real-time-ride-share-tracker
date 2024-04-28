import React, { useState } from 'react';
import { BottomBar, Map, MiddleBar, TopBar } from '../components';
import { intermediateStops } from '../data/mapsData';

export default function Home() {
  const [driverLocationIndex, setDriverLocationIndex] = useState(0);

  const driverLocation = intermediateStops[driverLocationIndex];
  const nextStop = intermediateStops[driverLocationIndex + 1]
    ? intermediateStops[driverLocationIndex + 1].name
    : '';

  return (
    <div className="flex flex-col w-full min-h-screen h-full relative text-white max-w-[430px]">
      <TopBar />
      <MiddleBar
        driverLocationIndex={driverLocationIndex}
        nextStop={nextStop}
      />
      <Map
        driverLocation={driverLocation}
        setDriverLocationIndex={setDriverLocationIndex}
      />
      <BottomBar />
    </div>
  );
}
