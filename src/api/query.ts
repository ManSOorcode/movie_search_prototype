import { useQuery } from "@tanstack/react-query";
import { fetchResponse } from "./api";
import { MovieGetDetails, MoviesGetFullResponse } from "../types/types";

export const useGetQuery = (search: string, page: number) => {
  return useQuery({
    queryKey: ["searchMovies", search, page],
    queryFn: () =>
      fetchResponse<MoviesGetFullResponse>(
        `/api/handler?search=${search}&page=${page}`
      ),
  });
};
export const useGetDetailsQuery = (imdb: string) => {
  return useQuery({
    queryKey: ["detailsMovies", imdb],
    queryFn: () => fetchResponse<MovieGetDetails>(`/api/handler?imdb=${imdb}`),
  });
};
