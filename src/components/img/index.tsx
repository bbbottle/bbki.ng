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

  const imgStyle = loaded
    ? {
        transform: `scale(1)`,
      }
    : {
        filter: "blur(20px)",
        transform: `scale(${(width + 80) / width})`,
        backgroundSize: "cover",
        backgroundPosition: "0% 0%",
        backgroundImage: `url(${
          thumbnailSrc
            ? thumbnailSrc
            : addOssWebpProcessStyle(src, ossProcessType.THUMBNAIL)
        })`,
      };

  const wrapperStyle = {
    display: "inline-block",
    overflow: "hidden",
    width: "initial",
    height: "initial",
    background: "none",
    opacity: 1,
    border: 0,
  };

  return (
    <span className={className} style={wrapperStyle}>
      <img
        onLoad={() => {
          setLoaded(true);
        }}
        width={width}
        height={height}
        src={src}
        style={Object.assign({ transition: "all" }, imgStyle)}
        decoding="async"
        className={classnames({
          "animation-pulse": !loaded,
          [avgColor]: !loaded,
        })}
      />
    </span>
  );
};
