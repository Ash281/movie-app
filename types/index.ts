/* TYPES FOR THE APP */

// define attributes for each movie
export interface MovieProps {
    imdbID: string;
    Year: number;
    Poster: string;
    Title: string;
    Type: string;
}

// define attributes for search
export interface SearchProps {
    title: string;
}

// define attributes for the movie page
export interface MoviePageProps {
    params: {
        movieId: string;
        Year: number;
        Poster: string;
        Title: string;
        Type: string;
    };
}
