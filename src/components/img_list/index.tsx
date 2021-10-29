import React from "react";
import cls from "classnames";
import { Photo } from "@/types/photo";
import { Img, ThreeColLayout } from "@/components";

type imgListProps = {
  imgList: Photo[];
  className?: string;
};

export const ImgList = (props: imgListProps) => {
  const { imgList, className } = props;

  const renderList = () => (
    <div className={cls("max-h-full no-scrollbar overflow-auto", className)}>
      {imgList.map((img) => {
        return <Img {...img} className="mb-80" key={img.src} />;
      })}
    </div>
  );

  return <ThreeColLayout middleRenderer={renderList} />;
};
