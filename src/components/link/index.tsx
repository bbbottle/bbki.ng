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
    className,
    ...rest
  } = props;

  const linkCls = cls(
    color,
    className,
    "rounded",
    "no-underline",
    "transition-colors",
    {
      [HOVER_COLOR_MAPPING[color]]: !underlineFirstLetter,
      underline: !underlineFirstLetter,
    }
  );

  const shouldUseOriginChildren =
    typeof props.children !== "string" || !underlineFirstLetter;
  const childrenJSX = shouldUseOriginChildren ? (
    props.children
  ) : (
    <>
      {<span className="underline">{(props.children as string)[0]}</span>}
      {(props.children as string).slice(1)}
    </>
  );

  if (external) {
    return (
      <a href={props.to} className={linkCls} target="_blank" rel="noreferrer">
        {childrenJSX}
      </a>
    );
  }

  return (
    <BaseLink {...rest} className={linkCls}>
      {childrenJSX}
    </BaseLink>
  );
};
