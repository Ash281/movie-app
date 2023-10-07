"use client"

import { MovieProps } from '@/types';
import { useRouter } from 'next/navigation';
import HeartIcon from "./heart.png";
import Image from 'next/image';


interface MovieCardProps {
    movie: MovieProps;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const router = useRouter();

  const updateURL = (id: string) => {
    const newPathname = `${window.location.origin}/title/${id}`;
          
    router.push(newPathname);
  }
  
  const handleMovieClick = (id: string) => {
    updateURL(id);
  }

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("liked");
  }
  ;
  const {imdbID, Year, Poster, Type, Title} = movie;
    return (
      <div className='movie' key={imdbID}>
        <button className="movie-button"
          onClick={()=>handleMovieClick(imdbID)}
        >

          <Image className='absolute top-5 right-5 w-12 h-12 cursor-text'
              src={HeartIcon}
              alt="like"
              style={{ mixBlendMode: 'multiply' }}
              onClick={(e) => handleHeartClick(e)}
          />  

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