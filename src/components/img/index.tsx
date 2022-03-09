import React, { useState } from "react";
import classnames from "classnames";
import { Photo } from "@/types/photo";
import { addOssWebpProcessStyle, calcDefaultImgSize, delay } from "@/utils";
import { ossProcessType } from "@/types/oss";

interface ImgProps extends Photo {
  className?: string;
}

const emptyDataURL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export const Img = (props: ImgProps) => {
  const { src, className, renderedWidth, avgColor, thumbnailSrc, processType } =
    props;
  const { width, height } = calcDefaultImgSize(props, renderedWidth);
  const [loaded, setLoaded] = useState(false);
  const [decoded, setDecoded] = useState(false);

  const baseWrapperStyle = {
    width: "initial",
    height: "initial",
    backgroundColor: avgColor || "#fff",
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

  const handleImgLoad = (img: HTMLImageElement) => {
    const updateFunc = async () => {
      const p = "decode" in img ? img.decode : Promise.resolve;
      try {
        await p();
      } catch (e) {}
      // await delay(500);
      // setDecoded(true);
      // await delay(500);
      // setLoaded(true);
    };

    // if (img.complete) {
    //   updateFunc().then();
    //   return;
    // }

    img.onload = updateFunc;
  };

  return (
    <span
      className={classnames(
        className,
        "inline-block",
        "relative",
        "overflow-hidden",
        "border-0"
      )}
      style={Object.assign({}, baseWrapperStyle, dynamicWrapperStyle)}
    >
      <img
        ref={(input) => {
          if (!input) {
            return;
          }

          handleImgLoad(input);
        }}
        width={width}
        height={height}
        src={addOssWebpProcessStyle(src, processType || ossProcessType.WEBP)}
        decoding="async"
        loading="lazy"
        style={{
          contentVisibility: "auto",
          top: 0,
          left: 0,
        }}
        className={classnames("transition-opacity", "opacity-100", {
          "opacity-0": !decoded,
        })}
      />
      <img
        src={emptyDataURL}
        className={classnames(
          "lqip-blur",
          "absolute",
          "transition-opacity",
          "opacity-100",
          {
            "opacity-0": decoded,
          }
        )}
        width={width}
        height={height}
        style={{ width, height, top: 0, left: 0 }}
      />
    </span>
  );
};
