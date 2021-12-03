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
      <DisabledText className="mb-32 block">{description}</DisabledText>
      {imgList.map((img, index) => {
        const isLast = index === imgList.length - 1;
        return (
          <div key={img.src}>
            <Img {...img} className="mb-32" />
            {!isLast && <DisabledText className="block mb-32">·</DisabledText>}
          </div>
        );
      })}
    </div>
  );
};

const ImgListWithTitle = withTitle(BaseImgList);

export const ImgList = (props: imgListProps) => {
  const renderList = () => <ImgListWithTitle {...props} />;

  return <ThreeColLayout middleRenderer={renderList} />;
};
