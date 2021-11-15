import { Photo } from "@/types/photo";
import { ossProcessType } from "@/types/oss";
import { OSS_ADDRESS } from "@/constants/routes";

export const floatNumberToPercentageString = (num: number): string => {
  return `${num * 100}%`;
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
    (isWebpImg && style === ossProcessType.WEBP)
  ) {
    return originUrl;
  }
  return `${originUrl}?x-oss-process=style/${style}`;
};

export const calcDefaultImgSize = (img: Photo, defaultWidth?: number) => {
  const { width, height } = img;
  const whRatio = width / height;
  const isHorizontal = width > height;

  const finalWidth = defaultWidth || (isHorizontal ? 576 : 384);

  return {
    width: finalWidth,
    height: finalWidth / whRatio,
  };
};

export * from "./tags";
