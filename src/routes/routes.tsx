import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { RootLayout } from '../layouts';
import {
  About,
  Contact,
  Home,
  NotFound,
  Projects,
  Skills,
  Testing,
} from '../pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={
          <>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        }
      />
      <Route path="*" element={<NotFound />} />
      <Route path="404" element={<NotFound />} />
      <Route path="testing" element={<Testing />} />
    </Route>,
  ),
);
