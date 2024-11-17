import { useQuery } from "@tanstack/react-query";
import { fetchResponse } from "./api";
import { MovieGetDetails, MoviesGetFullResponse } from "../types/types";

const apiUrl = import.meta.env.VITE_OMDB_API_URL;
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export const useGetQuery = (search: string, page: number) => {
  return useQuery({
    queryKey: ["searchMovies", search, page],
    queryFn: () =>
      fetchResponse<MoviesGetFullResponse>(
        `${apiUrl}?apikey=${apiKey}&s=${search}&page=${page}`
      ),
  });
};
export const useGetDetailsQuery = (imdb: string) => {
  return useQuery({
    queryKey: ["detailsMovies", imdb],
    queryFn: () =>
      fetchResponse<MovieGetDetails>(`${apiUrl}?apikey=${apiKey}&i=${imdb}`),
  });
};
