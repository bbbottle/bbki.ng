import React, { WheelEventHandler } from "react";
import cls from "classnames";

type imgListProps = {
  srcList: string[];
  className?: string;
};

export const ImgList = (props: imgListProps) => {
  const { srcList, className } = props;

  const handlerScroll: WheelEventHandler = (event) => {
    if (!event.deltaY) {
      return;
    }

    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  };

  return (
    <div
      className={cls(
        "flex max-w-full no-scrollbar -backdrop-hue-rotate-15 overflow-auto px-96",
        className
      )}
      onWheel={handlerScroll}
    >
      {srcList.map((src, index) => {
        const isLast = index === srcList.length - 1;
        return (
          <img
            key={src}
            src={src}
            alt="*<]:{]"
            className={cls("max-h-96", { "mr-80": !isLast })}
          />
        );
      })}
    </div>
  );
};
