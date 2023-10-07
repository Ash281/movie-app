"use client"

import { MovieProps } from '@/types';
import { useRouter } from 'next/navigation';
import HeartIcon from "./heart.png";
import Image from 'next/image';
import { useState } from 'react';
import Heart from 'react-animated-heart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from "@fortawesome/free-solid-svg-icons"

interface MovieCardProps {
    movie: MovieProps;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const router = useRouter();


  const updateURL = (id: string) => {
    const newPathname = `${window.location.origin}/title/${id}`;
    router.push(newPathname);
  }

  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
    //alert("liked");
  }
  
  const handleMovieClick = (id: string) => {
    updateURL(id);
  }
 
  const {imdbID, Year, Poster, Type, Title} = movie;
    return (
      <div className='movie' key={imdbID}>
        
        <button className="movie-button"
          onClick={()=>handleMovieClick(imdbID)}
        >

          <FontAwesomeIcon className={`heart ${isLiked ? 'expanded' : ''}`}
          icon={faHeart}
          onClick={(e) => {e.stopPropagation(); handleHeartClick()}}
          ></FontAwesomeIcon>

          <div>
            <p>{Year}</p>
          </div>

          <div>
            <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
          </div>

          <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
          </div>
          
        </button>
    </div>
  );
}

export default MovieCard;