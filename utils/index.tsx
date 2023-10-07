import { SearchProps } from "@/types";

const API_URL = "http://www.omdbapi.com/?apikey=1730c32d";

export async function fetchMovies(filters: SearchProps) {
  const { title } = filters;
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
    
  return data.Search;
}

export async function fetchMovieDetails(id: string) {
  const response = await fetch(`${API_URL}&i=${id}&plot=full`);
  const data = await response.json()
  
  return data;
}

export async function fetchTrending() {
  const response = await fetch(`${API_URL}&s=`)
}

export async function updateAPI() {
  const backendAPIUrl
}