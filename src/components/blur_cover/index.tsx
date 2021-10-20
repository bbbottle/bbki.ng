import React from "react";
import classnames from "classnames";
import { TextColors } from "@/types/color";

type blurCoverProps = {
  textColor?: TextColors;
  className?: string;
  children: any;
  height?: number;
  visibleOnHover?: boolean;
};

export const BlurCover = (props: blurCoverProps) => {
  const { textColor, children, className, height = 50, visibleOnHover } = props;
  const cls = classnames(
    className,
    textColor,
    "blur-cover",
    "absolute",
    "w-full",
    "flex items-center justify-center"
  );
  return (
    <div className={cls} style={{ height }}>
      {children}
    </div>
  );
};
