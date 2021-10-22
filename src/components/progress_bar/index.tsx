import React from "react";
import classnames from "classnames";
import { BgColors } from "@/types/color";
import { floatNumberToPercentageString } from "@/utils";

type progressBarProps = {
  bgColor?: BgColors;
  fgColor?: BgColors;
  height?: number;
  progress: number;
};

export const ProgressBar = (props: progressBarProps) => {
  const {
    height = 2,
    fgColor = BgColors.BLUE,
    bgColor = BgColors.GRAY,
    progress,
  } = props;

  const wrapperCls = classnames("w-full", "text-left", bgColor);
  const innerBarCls = classnames("h-full", fgColor);
  return (
    <div className={wrapperCls} style={{ height }}>
      <div
        className={innerBarCls}
        style={{ width: floatNumberToPercentageString(progress) }}
      />
    </div>
  );
};
