import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar2 from '../components/Navbar/Navbar2';
import { Navbar } from '../components';
import { PreLoader } from '../pages/PreLoader';

export function RootLayout() {
  const [showPreLoader, setShowPreLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handlePreLoaderComplete = () => {
    setShowPreLoader(false);
    setShowContent(true);
  };

  window.addEventListener('resize', () => {
    const minWidth = 1536;
    const body = document.body;
    if (window.innerWidth > minWidth) {
      body.classList.add('custom-class');
    } else {
      body.classList.remove('custom-class');
    }
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden max-w-screen-2xl">
      <PreLoader
        onPreLoaderComplete={handlePreLoaderComplete}
        duration={3000}
        show={showPreLoader}
      />
      {showContent && (
        <>
          <Navbar2 />
          <main className="overflow-hidden">
            <Outlet />
          </main>
          <Navbar />
        </>
      )}
    </div>
  );
}
