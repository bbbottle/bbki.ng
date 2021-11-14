import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import cls from "classnames";
import { BgColors } from "@/types/color";
import { ThreeColLayout } from "@/components";
import { withTitle } from "@/components/with_title";

interface listProps {
  className?: string;
  compact?: boolean;
  items: any[];
  itemRenderer: (itemProps: any, index: number) => ReactElement;
  horizontal?: boolean;
}

export const List: FunctionComponent<listProps> = (props) => {
  const { items, itemRenderer, className, horizontal, compact } = props;

  const spaceCls = compact ? "" : horizontal ? "mr-3" : "mb-2";
  return (
    <ul
      className={cls(className, "list-style-none", {
        flex: horizontal,
        "align-center": horizontal,
      })}
    >
      {items.map((item, index) => {
        return (
          <li key={item.id || index} className={spaceCls}>
            {itemRenderer(item, index)}
          </li>
        );
      })}
    </ul>
  );
};

export const ListWithTitle = withTitle(List);

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
    <ListWithTitle
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
    return null;
  }
  return (
    <ThreeColLayout
      middleRenderer={() => <ListWithTitleSkeleton {...props} />}
    />
  );
};
