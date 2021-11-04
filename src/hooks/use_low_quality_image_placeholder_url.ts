import { blurImage } from "@/utils";
import { useImg } from "@/hooks/use_img";

// todo: should encode image and get blur hash at build time
export const useLQIPDataUrl = (originUrl: string) => {
  const { img, loading } = useImg(originUrl);
  if (!img || loading) {
    return "";
  }
  return blurImage(img);
};
