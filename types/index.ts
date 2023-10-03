export interface MovieProps {
    imdbID: string;
    Year: number;
    Poster: string;
    Title: string;
    Type: string;
}

export interface SearchProps {
    title: string;
}

export interface MoviePageProps {
    movieId: string;
}