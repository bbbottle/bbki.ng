import { useCallback } from "react";
import { useSupabaseSession } from "@/hooks/use_supa_session";
import { apiFetcher, getImageFileSize, withToken } from "@/utils";
import { Photo } from "@/types/photo";
import { API } from "@/constants/routes";
import { UploadResult } from "@/types/oss";

export const useUploader = () => {
  const { access_token: token } = useSupabaseSession() || {};
  const authedApiFetcher = withToken(apiFetcher)(token);

  return useCallback(
    async (pid: string, projectName: string, file: File): Promise<Photo> => {
      const { width, height } = await getImageFileSize(file);

      const url = `${API.UPLOAD_IMG}?pid=${pid}&fileName=${file.name}&projectName=${projectName}&width=${width}&height=${height}`;

      const result = (await authedApiFetcher(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
        },
        body: file,
      })) as UploadResult;

      return {
        width,
        height,
        src: result.url,
      };
    },
    [token]
  );
};
