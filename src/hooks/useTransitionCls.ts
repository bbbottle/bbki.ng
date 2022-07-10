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
    "blur-sm": !visible && blur,
    "blur-none": visible && blur,
    "translate-y-0": visible && offset,
    "translate-y-8": !visible && offset,
    "opacity-10": !visible && opacity,
    "opacity-100": visible && opacity,
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  return cls;
};
