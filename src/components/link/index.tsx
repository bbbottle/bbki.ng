import cls from "classnames";
import { Link as BaseLink, LinkProps as BaseLinkProps } from "react-router-dom";
import React from "react";

interface LinkProps extends BaseLinkProps {
  color?: "blue" | "red" | "gray";
  external?: boolean;
  to: string;
  underlineFirstLetter?: boolean;
}

const COLOR_CLS_MAP = {
  blue: "text-blue-600",
  red: "text-red-500",
  gray: "text-gray-400",
};

export const Link = (props: LinkProps) => {
  const { color = "blue", external, underlineFirstLetter, ...rest } = props;
  const colorCls = COLOR_CLS_MAP[color];
  const linkCls = cls(colorCls, "underline");
  if (external) {
    return (
      <a href={props.to} className={linkCls} target="_blank">
        {props.children}
      </a>
    );
  }

  if (typeof props.children !== "string" || !underlineFirstLetter) {
    return <BaseLink {...rest} className={linkCls} />;
  }

  return (
    <BaseLink {...rest} className={colorCls}>
      {<span className="underline">{props.children[0]}</span>}
      {props.children.slice(1)}
    </BaseLink>
  );
};
