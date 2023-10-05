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
  }, []); //using this to check if the component has rendered on the client side yet

  return (
    <>
      {isClient && (
        <div className="flex min-w-screen h-24 
        flex-row pl-36 pt-5 pb-5 space-x-10 bg-zinc-800
        animate-fade-in relative">
          <div className='rounded-lg bg-gradient-to-r from-slate-900 to-slate-600 absolute inset-0 blur-md -z-10'></div>
          <SideBar />
          <SearchBar />
          <Header />
          <div className='p-3 x-5'>
            <UserButton />
          </div> 
        </div>
      )}
    </>
  );
};
    
export default NavBar;