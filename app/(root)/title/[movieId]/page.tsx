import React from 'react';
import { fetchMovieDetails } from '@/utils';
import { MoviePageProps } from '@/types';

const movieDetailsPage = async ({ params }: MoviePageProps) => {
  const id = params.movieId; 
  const movieDetails = await fetchMovieDetails(id);
  console.log(movieDetails);
  
  return (
    <div className="flex min-h-screen flex-col text-center m-10 space-y-10 pl-80 pr-80 h-full
    animate-fade-in">
      <h1 className="text-4xl font-medium">{movieDetails.Title}</h1>   
      <div className="movie-details-poster">
        <img src={movieDetails.Poster} />
      </div>  
      <h1>{movieDetails.Released}</h1>
      <h1>{movieDetails.Actors}</h1>
      <h1>{movieDetails.Writer}</h1>
      
      <h1 className="bg-gray-500 rounded-md">{movieDetails.Plot}</h1>
      
    </div>
    
  )
}

export default movieDetailsPage;