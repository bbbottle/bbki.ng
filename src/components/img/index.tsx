import React from "react";
import { Photo } from "@/types/photo";
import { useImgLoading } from "@/hooks";
import { ImgPlaceholder } from "@/components";
import { calcDefaultImgSize } from "@/utils";

interface ImgProps extends Photo {
  className?: string;
  renderedWidth?: number;
}

export const Img = (props: ImgProps) => {
  const { src, className, renderedWidth } = props;
  const { width, height } = calcDefaultImgSize(props, renderedWidth);
  const loading = useImgLoading(src);

  const imgStyle = {
    width,
  };

  if (loading) {
    return (
      <ImgPlaceholder
        {...props}
        pHeight={height}
        pWidth={width}
        className={className}
      />
    );
  }

  return <img src={src} style={imgStyle} className={className} />;
};
