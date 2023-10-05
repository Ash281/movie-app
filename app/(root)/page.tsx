import MovieCard from '@/components/MovieCard'
import SearchBar from '@/components/SearchBar'
import { MovieProps } from '@/types'
import { fetchMovies } from '@/utils'
import { fetchTrending } from '@/utils'

import { SignedIn } from '@clerk/nextjs'

const Home = async ({ searchParams }) => {

  const movies = await fetchMovies({
    title: searchParams.search
  });

  const trendingMovies = await fetchTrending(

  );

  const searchTermExists = () => {
    if (searchParams.search != null){
      return true;
    }
    return false;
  }

  return (
    <SignedIn>
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        {searchTermExists() ? <div className="text-lg font-semibold animate-fade-in">
        
        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie: MovieProps) => (
            
              <MovieCard 
                key={movie.imdbID}
                movie={movie} 
              />
     
          ))}
        </div>
      ) : (
        <div className="empty animate-fade-in">
          <h2>No movies found</h2>
        </div>
      )}
      </div> :
      <div className='text-4xl'>
        Trending
      </div>}
    </main>
    </SignedIn>
  )
}

export default Home;