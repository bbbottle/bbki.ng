import useSWR, { useSWRConfig } from "swr";
import { API } from "@/constants/routes";
import { useCallback } from "react";
import { Photo } from "@/types/photo";

export const useProjects = (name: string = "") => {
  const URL = `${API.PROJECTS}${name ? "/" : ""}${name}`;

  const { data, error } = useSWR(URL, {
    revalidateOnFocus: false,
  });

  const { mutate, cache } = useSWRConfig();

  const getCachedProjects = (n: string) => {
    if (!n || !cache) {
      return;
    }
    return cache.get("projects").find((p: { name: string }) => p.name === n);
  };

  const refresh = useCallback(() => {
    return mutate(URL);
  }, [URL]);

  const addLocalPhotoImmediately = useCallback(
    (photo: Photo) => {
      if (!name) {
        return;
      }

      if (!data || error) {
        return;
      }

      return mutate(
        URL,
        {
          ...data,
          images: [photo, ...data.images],
        },
        false
      );
    },
    [data, error]
  );

  return {
    refresh,
    addLocalPhotoImmediately,
    projects: data || getCachedProjects(name),
    isError: error,
    isLoading: !data && !error,
  };
};
