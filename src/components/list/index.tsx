import React, { ReactElement } from "react";
import cls from "classnames";

interface listProps {
  className?: string;
  items: any[];
  itemRenderer: (itemProps: any, index: number) => ReactElement;
  horizontal?: boolean;
}

export const List = (props: listProps) => {
  const { items, itemRenderer, className, horizontal } = props;

  return (
    <ul className={cls(className, { flex: horizontal })}>
      {items.map((item, index) => {
        const liCls = horizontal ? "mr-2" : "mb-2";
        return (
          <li key={item.id || index} className={liCls}>
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
      <hr />
      <p>
        <List {...rest} />
      </p>
    </div>
  );
};
