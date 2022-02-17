import useSWR from "swr";
import { API } from "@/constants/routes";

export const useProjects = (name: string = "") => {
  const { data, error } = useSWR(`${API.PROJECTS}${name ? "/" : ""}${name}`);
  return {
    projects: data,
    isError: error,
    isLoading: !data && !error,
  };
};
