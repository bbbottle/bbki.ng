import React, { FunctionComponent } from "react";
import cls from "classnames";
import { Photo } from "@/types/photo";
import { DisabledText, Img, ThreeColLayout, withTitle } from "@/components";

interface imgListProps {
  className: string;
  imgList: Photo[];
  description?: string;
}

const BaseImgList: FunctionComponent<imgListProps> = (props: imgListProps) => {
  const { imgList, className, description } = props;

  return (
    <div className={cls("max-h-full no-scrollbar overflow-auto", className)}>
      <DisabledText className="mb-40 block">{description}</DisabledText>
      {imgList.map((img) => {
        return <Img {...img} className="mb-80" key={img.src} />;
      })}
    </div>
  );
};

const ImgListWithTitle = withTitle(BaseImgList);

export const ImgList = (props: imgListProps) => {
  const renderList = () => <ImgListWithTitle {...props} />;

  return <ThreeColLayout middleRenderer={renderList} />;
};
