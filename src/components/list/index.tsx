import React, { useEffect, useState } from "react";
import cls from "classnames";
import { TitledList } from "@bbki.ng/components";
import { BgColors } from "@/types/color";
import { FadeOutCover } from "@/components/fade_out_cover";
import { DEFAULT_DELAY } from "@/constants";

type SkeletonProps = {
  bgColor: BgColors;
  width?: number;
  height?: number;
};

export const Skeleton = (props: SkeletonProps) => {
  const { bgColor, width = 26, height = 24 } = props;
  return (
    <div
      className={cls(bgColor, "animate-pulse", "rounded")}
      style={{ width, height }}
    />
  );
};

type ListWithTitleSkeletonProps = {
  titleLength: number;
  listItemLength?: number;
  listItemWidthArray?: number[];
};

export const ListWithTitleSkeleton = (props: ListWithTitleSkeletonProps) => {
  const { titleLength, listItemLength, listItemWidthArray = [] } = props;
  const items = new Array(listItemLength || listItemWidthArray.length)
    .fill(null)
    .map((_, index) => {
      return (
        <Skeleton
          bgColor={BgColors.WHITE_BLUE}
          width={listItemWidthArray[index]}
        />
      );
    });

  return (
    <TitledList
      title={
        <Skeleton
          bgColor={BgColors.LIGHT_GRAY}
          height={40}
          width={26.5 * titleLength}
        />
      }
      items={items}
      itemRenderer={(n: any) => n}
    />
  );
};

export const CenterListWithTitleSkeleton = (
  props: ListWithTitleSkeletonProps
) => {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setShowSkeleton(true);
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  });

  if (!showSkeleton) {
    return <FadeOutCover duration={DEFAULT_DELAY} coverColor="#fff" />;
  }
  return <ListWithTitleSkeleton {...props} />;
};
