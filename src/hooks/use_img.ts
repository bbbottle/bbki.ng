import { useEffect, useState } from "react";

export const useImg = (src: string) => {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  useEffect(() => {
    let img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;
    img.onload = () => {
      setLoading(false);
      setImg(img);
    };
    return () => {
      img.src = "";
    };
  }, []);

  return { img, loading };
};
