import React from "react";
import classnames from "classnames";
import { Photo } from "@/types/photo";
import { ossProcessType } from "@/types/oss";
import { AspectRatioBox } from "@/components/aspect_ratio_box";
import { addOssWebpProcessStyle } from "@/utils";

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
    thumbnailSrc,
    src,
    className,
  } = props;

  const placeholderImg = thumbnailSrc
    ? thumbnailSrc
    : addOssWebpProcessStyle(src, ossProcessType.THUMBNAIL);

  return (
    <AspectRatioBox
      width={width}
      hwRatio={height / width}
      className={classnames(className, backgroundColor)}
    >
      <div
        className={classnames(
          "absolute top-0 left-0 right-0 bottom-0 z-0 animate-pulse opacity-25",
          backgroundColor
        )}
      />
      <div className="blur-cover absolute top-0 left-0 right-0 bottom-0 z-0" />
      <img src={placeholderImg} style={{ width, height: "auto" }} />
    </AspectRatioBox>
  );
};
