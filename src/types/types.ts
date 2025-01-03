export interface SearchProps {
  searchvalue: string;
  searchhandler: (value: string) => void;
}

export interface MoviesGetResponse {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
export interface MoviesGetFullResponse {
  Response: string;
  Search: MoviesGetResponse[];
  totalResults: number;
}

export interface CardProps {
  moviesData: MoviesGetResponse;
  selectCode: (value: string) => void;
}

export interface RatingType {
  Source: string;
  Value: string;
}

export interface MovieGetDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: RatingType[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface MovieGetDetailsProps {
  details?: MovieGetDetails;
  close: () => void;
  isError: boolean;
  isLoading: boolean;
  error?: Error | null;
}
