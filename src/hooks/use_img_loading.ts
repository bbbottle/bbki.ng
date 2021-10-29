import { useEffect, useState } from "react";

export const useImgLoading = (src: string) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let img = new Image();
    img.src = src;
    img.onload = () => {
      setLoading(false);
    };
    return () => {
      img.src = "";
    };
  }, []);
  return loading;
};
