"use client";

import React, { SyntheticEvent } from 'react';
import { useState, useEffect } from 'react';
import SearchIcon from "./search.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const router = useRouter();
    
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSearch = () => {
        updateSearchParams(searchTerm);
    }

    const updateSearchParams = (searchTerm: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (searchTerm) {
            searchParams.set('search', searchTerm)
        }
        else {
            searchParams.delete('search')
        }
       
        const newPathname = `${window.location.origin}?${searchParams.toString()}`
        router.push(newPathname);
    }

    /* useEffect(() => {
        handleSearch();
    }, [searchTerm]) */ 
    /* with the use effect hook, every time search term changes
    the handleSearch() method is executed */

    const handleKeyPress = (event) => {
        if (event.key === 'Enter'){
            handleSearch();
        }
    }
  
    return (
        <div className="search">
            
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e)}
                placeholder="Search for movies..."
            />
            <Image className='searchicon'
                src={SearchIcon}
                alt="search"
                onClick={() => handleSearch()}
            />  
           
      </div>
    )
}

export default SearchBar;