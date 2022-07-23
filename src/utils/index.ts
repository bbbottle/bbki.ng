import { Photo } from "@/types/photo";
import { ossProcessType } from "@/types/oss";
import { API_ENDPOINT, OSS_ADDRESS } from "@/constants/routes";
import { DEFAULT_DELAY } from "@/constants";
import useSWR, { Fetcher } from "swr";

export const floatNumberToPercentageString = (num: number): string => {
  return `${num * 100}%`;
};

export const delay = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export const minDelay = async (
  promise: Promise<any>,
  time: number = DEFAULT_DELAY
): Promise<any> => {
  const delayPromise = delay(time);
  await Promise.all([delayPromise, promise]);
  return promise;
};

export const addOssWebpProcessStyle = (
  originUrl: string,
  style: ossProcessType
): string => {
  const isInvalidOSSImgUrl = !originUrl.startsWith(OSS_ADDRESS);
  const isProcessedOssImg = /x-oss-process=style\/\w+/.test(originUrl);
  const isWebpImg = /webp$/.test(originUrl);

  if (
    isInvalidOSSImgUrl ||
    isProcessedOssImg ||
    (isWebpImg && style === ossProcessType.WEBP) ||
    style === ossProcessType.NULL
  ) {
    return originUrl;
  }
  return `${originUrl}?x-oss-process=style/${style}`;
};

export const calcDefaultImgSize = (
  img: Photo,
  defaultWidth?: number,
  scale?: number
): { width: number; height: number } => {
  const { width, height } = img;
  const whRatio = width / height;
  const isHorizontal = width > height;

  const finalWidth =
    (defaultWidth || (isHorizontal ? 576 : 384)) * (scale || 1);

  return {
    width: finalWidth,
    height: finalWidth / whRatio,
  };
};

export const getEnv = () => {
  return /^http:\/\/localhost/.test(location.href)
    ? "development"
    : "production";
};

export const baseFetcher = (resource: string, init: RequestInit = {}) =>
  fetch(resource, init).then((res) => res.json());

export const withToken =
  (fetcher: Fetcher) =>
  (token?: string) =>
  (resource: string, init: RequestInit = {}) => {
    const { headers = {} } = init;
    const tokenHeaders = token
      ? {
          "X-Supabase-Auth": token,
        }
      : {};
    const finalHeaders = {
      ...headers,
      ...tokenHeaders,
    };
    return fetcher(resource, {
      ...init,
      headers: finalHeaders,
    });
  };

export const withBBApi =
  (fetcher: Fetcher<Promise<void>>) =>
  (apiEndPoint = API_ENDPOINT): Fetcher =>
  async (resource: string, init: RequestInit = {}) =>
    fetcher(`${apiEndPoint}/${resource}`, { ...init, mode: "cors" });

export const apiFetcher = withBBApi(baseFetcher)(API_ENDPOINT);

export const getImageFileSize = (
  file: File
): Promise<{ width: number; height: number }> => {
  const url = URL.createObjectURL(file);
  const img = new Image();
  return new Promise((resolve) => {
    img.src = url;
    img.onload = function (e) {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
  });
};

export const buildSimpleApiHooks = (api: string, payloadKey: string) => {
  return () => {
    const { data, error } = useSWR(api);
    return {
      [payloadKey]: data,
      isError: error,
      isLoading: !data && !error,
    };
  };
};

export const imageFormatter = (image: any) => {
  const { rendered_width, thumbnail_src, avg_color, process_type, ...rest } =
    image;
  return {
    renderedWidth: rendered_width,
    thumbnailSrc: thumbnail_src,
    avgColor: avg_color,
    processType: process_type,
    ...rest,
  };
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
