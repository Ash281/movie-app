import React from 'react';
import { fetchMovieDetails } from '@/utils';
import { MoviePageProps } from '@/types';

/* PAGE FOR MOVIE DETAILS */

// params passes in the movieId from the URL as context
const movieDetailsPage = async ({ params }: MoviePageProps) => {
  const id = params.movieId; 
  const movieDetails = await fetchMovieDetails(id);
  
  //use template strings when referencing a const (`{object}`)
  return (
    <div className="relative">
      {/* Element for the blurred background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'black',
          filter: 'blur(0px)',
          zIndex: -1,
          opacity: 0.65
        }}
      ></div>
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${movieDetails.Poster})`,
          filter: 'blur(30px)',
          zIndex: -5
        }}
      ></div>

      <div className="flex min-h-screen flex-col text-center h-full
      animate-fade-in font-quicksand-300">
        <div className="m-10 pl-80 pr-80">
          <h1 className="text-4xl font-medium">{movieDetails.Title}</h1>   
          <div className="movie-details-poster">
            <img src={movieDetails.Poster} />
          </div>  
          <h1 className='p-6'>{movieDetails.Released}</h1>
          <h1>Actors</h1>
          <h1>{movieDetails.Actors}</h1>
          <h1>{movieDetails.Writer}</h1>
          <h1 className="">{movieDetails.Plot}</h1>
        </div> 
      </div>
    </div>
  )
}

export default movieDetailsPage;