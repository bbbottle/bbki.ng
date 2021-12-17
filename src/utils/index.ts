import { Photo } from "@/types/photo";
import { ossProcessType } from "@/types/oss";
import { OSS_ADDRESS } from "@/constants/routes";
import { DEFAULT_DELAY } from "@/constants";

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
  defaultWidth?: number
): { width: number; height: number } => {
  const { width, height } = img;
  const whRatio = width / height;
  const isHorizontal = width > height;

  const finalWidth = defaultWidth || (isHorizontal ? 576 : 384);

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
