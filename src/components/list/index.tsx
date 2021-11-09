import React, { ReactElement } from "react";
import cls from "classnames";

interface listProps {
  className?: string;
  compact?: boolean;
  items: any[];
  itemRenderer: (itemProps: any, index: number) => ReactElement;
  horizontal?: boolean;
}

export const List = (props: listProps) => {
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

interface listWithTitleProps extends listProps {
  title: string;
  className?: string;
}

export const ListWithTitle = (props: listWithTitleProps) => {
  const { title, className, ...rest } = props;
  return (
    <div className={className}>
      <h1>{title}</h1>
      <List {...rest} />
    </div>
  );
};
