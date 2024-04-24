import React from 'react';
import { BottomBar, Map, MiddleBar, TopBar } from '../components';

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen h-full relative text-white max-w-[430px]">
      <TopBar />
      <MiddleBar />
      <Map />
      <BottomBar />
    </div>
  );
}
