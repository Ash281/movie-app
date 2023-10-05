"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import SideBar from './SideBar';
import SearchBar from './SearchBar';
import Header from './Header';
import { UserButton } from '@clerk/nextjs';

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
          <UserButton />
        </div>
      )}
    </>
  );
};
    
export default NavBar;