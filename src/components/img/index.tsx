import React, { useState } from "react";
import classnames from "classnames";
import { Photo } from "@/types/photo";
import { addOssWebpProcessStyle, calcDefaultImgSize } from "@/utils";
import { ossProcessType } from "@/types/oss";

interface ImgProps extends Photo {
  className?: string;
}

export const Img = (props: ImgProps) => {
  const { src, className, renderedWidth, avgColor, thumbnailSrc } = props;
  const { width, height } = calcDefaultImgSize(props, renderedWidth);
  const [loaded, setLoaded] = useState(false);

  const baseWrapperStyle = {
    width: "initial",
    height: "initial",
  };

  const dynamicWrapperStyle = loaded
    ? {
        backgroundImage: "none",
      }
    : {
        backgroundSize: "cover",
        backgroundPosition: "0% 0%",
        backgroundImage: `url(${
          thumbnailSrc
            ? thumbnailSrc
            : addOssWebpProcessStyle(src, ossProcessType.THUMBNAIL)
        })`,
      };

  return (
    <span
      className={classnames(
        className,
        "inline-block",
        "overflow-hidden",
        "border-0",
        {
          [avgColor]: !loaded,
        }
      )}
      style={Object.assign({}, baseWrapperStyle, dynamicWrapperStyle)}
    >
      <img
        ref={(input) => {
          if (!input) {
            return;
          }

          const img = input;

          const updateFunc = () => {
            setLoaded(true);
          };
          if (img.complete) {
            updateFunc();
          }
        }}
        width={width}
        height={height}
        src={src}
        decoding="async"
        loading="lazy"
        className={classnames("lqip-blur")}
      />
    </span>
  );
};
