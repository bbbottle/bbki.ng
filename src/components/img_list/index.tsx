import React, { FunctionComponent } from "react";
import cls from "classnames";
import { Photo } from "@/types/photo";
import { Img, ThreeColLayout, withTitleAndDescription } from "@/components";

interface imgListProps {
  className: string;
  imgList: Photo[];
  description?: any;
}

const BaseImgList: FunctionComponent<imgListProps> = (props: imgListProps) => {
  const { imgList, className } = props;

  return (
    <div className={cls("max-h-full no-scrollbar overflow-auto", className)}>
      {imgList.map((img, index) => {
        const isLast = index === imgList.length - 1;
        return (
          <div key={img.src}>
            <Img {...img} className="mb-128" />
            {!isLast && <span className="block mb-128" />}
          </div>
        );
      })}
    </div>
  );
};

const ImgListWithTitle = withTitleAndDescription(BaseImgList);

interface TitledImageListProps extends imgListProps {
  title: string;
}

export const ImgList = (props: TitledImageListProps) => {
  const renderList = () => <ImgListWithTitle {...props} />;

  return <ThreeColLayout middleRenderer={renderList} />;
};
