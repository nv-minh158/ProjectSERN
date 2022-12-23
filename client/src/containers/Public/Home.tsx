import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Navigation from './Navigation';

const Home = () => (
    <div className="flex flex-col items-center border border-red-500 m-full w-h-full">
      <Header />
      <Navigation />
      <div className="flex flex-col items-center justify-start w-full w-1100">
        <Outlet />
      </div>
    </div>
);

export default Home;
