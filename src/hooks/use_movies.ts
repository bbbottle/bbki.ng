import useSWR from "swr";
import { API } from "@/constants/routes";

export const useMovies = () => {
  const { data, error } = useSWR(API.MOVIES);
  return {
    movies: data,
    isError: error,
    isLoading: !data && !error,
  };
};
