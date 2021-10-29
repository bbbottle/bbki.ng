import { Photo } from "@/types/photo";

export const floatNumberToPercentageString = (num: number): string => {
  return `${num * 100}%`;
};

export const addOssWebpProcessStyle = (
  originUrl: string,
  style: string
): string => `${originUrl}?x-oss-process=style/${style}`;

export const calcDefaultImgSize = (img: Photo, defaultWidth?: number) => {
  const { width, height } = img;
  const whRatio = width / height;
  const isHorizontal = width > height;

  const finalWidth = defaultWidth || isHorizontal ? 576 : 384;

  return {
    width: finalWidth,
    height: finalWidth / whRatio,
  };
};
