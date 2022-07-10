import React, { useEffect } from "react";
import classnames from "classnames";

interface TransOption {
  originCls?: string;
  opacity?: boolean;
  offset?: boolean;
  blur?: boolean;
}

const defaultOpt = {
  originCls: "",
  opacity: true,
  offset: true,
  blur: true,
};

export const useTransitionCls = (options: TransOption = defaultOpt) => {
  const [visible, setVisible] = React.useState(false);
  const { originCls, opacity, offset, blur } = options;

  const cls = classnames(originCls, "transition-all", "duration-500", {
    relative: offset,
    "blur-sm": !visible && blur,
    "blur-none": visible && blur,
    "top-0": visible && offset,
    "top-8": !visible && offset,
    "opacity-0": !visible && opacity,
    "opacity-100": visible && opacity,
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  return cls;
};
