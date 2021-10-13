import cls from "classnames";
import { Link as BaseLink, LinkProps as BaseLinkProps } from "react-router-dom";
import React from "react";

interface LinkProps extends BaseLinkProps {
  color?: "blue" | "red" | "gray";
  external?: boolean;
  to: string;
}

const COLOR_CLS_MAP = {
  blue: "text-blue-600",
  red: "text-red-500",
  gray: "text-gray-400",
};

export const Link = (props: LinkProps) => {
  const { color = "blue", external } = props;
  const colorCls = COLOR_CLS_MAP[color];
  const linkCls = cls(colorCls, "underline");
  if (external) {
    return (
      <a href={props.to} className={linkCls} target="_blank">
        {props.children}
      </a>
    );
  }

  return <BaseLink {...props} className={linkCls} />;
};
