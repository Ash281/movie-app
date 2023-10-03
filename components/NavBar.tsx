"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import SideBar from './SideBar';
import SearchBar from './SearchBar';
import Header from './Header';

const NavBar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="flex min-w-screen h-24 flex-row pl-36 pt-5 pb-5 space-x-10 bg-slate-800">
          <Header />
          <SideBar />
          <SearchBar />
          <div className='fixed bg-gray-500 rounded-lg font-semibold text-white text-center p-4 right-9'>Log in</div>
        </div>
      )}
    </>
  );
};
    
export default NavBar;