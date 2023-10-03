"use client"

import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

const SideBar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Menu className='sidebar'>
          <a className="menu-item" href="/">
            Home
          </a>
        </Menu>    
      )}
    </>
  );
};

export default SideBar;