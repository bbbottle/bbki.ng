import React from "react";
import classnames from "classnames";
import { Photo } from "@/types/photo";
import { AspectRatioBox } from "@/components/aspect_ratio_box";

interface imgPlaceholderProps extends Photo {
  pWidth: number;
  pHeight: number;
  className?: string;
}

export const ImgPlaceholder = (props: imgPlaceholderProps) => {
  const {
    avgColor: backgroundColor,
    pWidth: width,
    pHeight: height,
    thumbnailSrc: src,
    className,
  } = props;

  return (
    <AspectRatioBox
      width={width}
      hwRatio={height / width}
      className={classnames(className, backgroundColor)}
    >
      <div className="blur-cover absolute top-0 left-0 right-0 bottom-0" />
      <img src={src} style={{ width, height: "auto" }} />
    </AspectRatioBox>
  );
};
