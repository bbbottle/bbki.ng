import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { Photo } from "@/types/photo";
import { addOssWebpProcessStyle, calcDefaultImgSize } from "@/utils";
import { ossProcessType } from "@/types/oss";
import * as Sentry from "@sentry/react";
import { Transaction } from "@sentry/types";

interface ImgProps extends Photo {
  className?: string;
}

export const Img = (props: ImgProps) => {
  const { src, className, renderedWidth, avgColor, thumbnailSrc, processType } =
    props;
  const { width, height } = calcDefaultImgSize(props, renderedWidth);
  const [loaded, setLoaded] = useState(false);

  const transaction = Sentry.startTransaction({
    name: "image presentation",
  });
  Sentry.getCurrentHub().configureScope((scope) => scope.setSpan(transaction));

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

  const handleImgLoad = (img: HTMLImageElement) => {
    const updateFunc = () => {
      const span = transaction.startChild({
        data: {
          img: src,
        },
        op: "load img",
        description: "handle image load",
      });

      const p = "decode" in img ? img.decode() : Promise.resolve();
      p.catch(() => {
        span.setStatus("error");
      })
        .then(() => {
          span.setStatus("success");
          setLoaded(true);
        })
        .finally(() => {
          span.finish();
          transaction.finish();
        });
    };

    if (img.complete) {
      updateFunc();
      return;
    }

    img.onload = updateFunc;
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

          handleImgLoad(input);
        }}
        width={width}
        height={height}
        src={addOssWebpProcessStyle(src, processType || ossProcessType.WEBP)}
        decoding="async"
        loading="lazy"
        style={{
          contentVisibility: "auto",
        }}
        className={classnames("transition-opacity", {
          "lqip-blur": !loaded,
          "opacity-50": !loaded,
          "opacity-100": !loaded,
        })}
      />
    </span>
  );
};
