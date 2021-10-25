export const floatNumberToPercentageString = (num: number): string => {
  return `${num * 100}%`;
};

export const addOssWebpProcessSuffix = (originUrl: string): string =>
  `${originUrl}?x-oss-process=style/webp`;
