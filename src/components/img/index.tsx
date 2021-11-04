import React from "react";
import { Photo } from "@/types/photo";
import { useImg } from "@/hooks";
import classnames from "classnames";
import { addOssWebpProcessStyle, calcDefaultImgSize, loadImage } from "@/utils";
import { ossProcessType } from "@/types/oss";
import { useLQIPDataUrl } from "@/hooks/use_low_quality_image_placeholder_url";

interface ImgProps extends Photo {
  className?: string;
}

export const Img = (props: ImgProps) => {
  const { src, className, renderedWidth, avgColor } = props;
  const { width, height } = calcDefaultImgSize(props, renderedWidth);

  const { loading } = useImg(src);
  const placeholderSrc = addOssWebpProcessStyle(src, ossProcessType.COMPRESS);

  const placeholderDataUrl = useLQIPDataUrl(placeholderSrc);

  const imgStyle = {
    backgroundSize: "cover",
    backgroundImage: loading ? `url(${placeholderDataUrl})` : "none",
  };

  const srcProps = loading ? {} : { src };

  return (
    <img
      {...srcProps}
      width={width}
      height={height}
      decoding="async"
      style={imgStyle}
      className={classnames(className, avgColor, { "animate-pulse": loading })}
    />
  );
};
