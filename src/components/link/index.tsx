import cls from "classnames";
import { Link as BaseLink, LinkProps as BaseLinkProps } from "react-router-dom";
import React from "react";

interface LinkProps extends BaseLinkProps {
  color?: "blue" | "red";
}

export const Link = (props: LinkProps) => {
  const { color = "blue" } = props;
  const colorCls = color === "blue" ? "text-blue-600" : "text-red-500";
  return <BaseLink {...props} className={cls(colorCls, "underline")} />;
};
