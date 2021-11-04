import { Photo } from "@/types/photo";
import { ossProcessType } from "@/types/oss";
import { OSS_ADDRESS } from "@/constants/routes";
import { encode, decode } from "blurhash";

const getImageDataUrlByBlurHash = (
  hash: string,
  imgWidth: number,
  imgHeight: number
): string => {
  const pixels = decode(hash, imgWidth, imgHeight);
  const canvas = document.createElement("canvas");
  const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
  if (!ctx) {
    return "";
  }

  const imageData = new ImageData(pixels, imgWidth, imgHeight);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
};

const getBlurHash = (img: HTMLImageElement): string => {
  const imgData = getImageData(img);
  if (!imgData) {
    return "";
  }
  const { height, data, width } = imgData;
  return encode(data, width, height, 5, 5);
};

export const loadImage = async (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.crossOrigin = "Anonymous";
    img.onerror = (...args) => reject(args);
    img.src = src;
  });

export const getImageData = (image: HTMLImageElement): ImageData | null => {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
  if (!context) {
    return null;
  }
  context.drawImage(image, 0, 0);
  return context.getImageData(0, 0, image.width, image.height);
};

export const blurImage = (img: HTMLImageElement) => {
  const hash = getBlurHash(img);
  return getImageDataUrlByBlurHash(hash, img.width, img.height);
};

export const floatNumberToPercentageString = (num: number): string => {
  return `${num * 100}%`;
};

export const addOssWebpProcessStyle = (
  originUrl: string,
  style: ossProcessType
): string => {
  if (!originUrl.startsWith(OSS_ADDRESS)) {
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
