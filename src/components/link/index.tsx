import cls from "classnames";
import { Link as BaseLink, LinkProps as BaseLinkProps } from "react-router-dom";
import React from "react";
import { HoveredTextColors, TextColors } from "@/types/color";

interface LinkProps extends BaseLinkProps {
  color?: TextColors;
  external?: boolean;
  to: string;
  underlineFirstLetter?: boolean;
}

const HOVER_COLOR_MAPPING = {
  [TextColors.BLUE]: HoveredTextColors.BLUR,
  [TextColors.RED]: HoveredTextColors.RED,
  [TextColors.GRAY]: HoveredTextColors.GRAY,
};

export const Link = (props: LinkProps) => {
  const {
    color = TextColors.BLUE,
    external,
    underlineFirstLetter,
    ...rest
  } = props;

  const linkCls = cls(color, HOVER_COLOR_MAPPING[color], "transition-colors", {
    "hover:underline": !underlineFirstLetter,
  });

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
    <BaseLink {...rest} className={linkCls}>
      {<span className="underline">{props.children[0]}</span>}
      {props.children.slice(1)}
    </BaseLink>
  );
};
