import React, { ReactElement } from "react";

interface listProps {
  items: any[];
  itemRenderer: (itemProps: any) => ReactElement;
}

export const List = (props: listProps) => {
  const { items, itemRenderer } = props;
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={item.id || index} className="mb-1">
            {itemRenderer(item)}
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
      <div className="mb-4">{title}</div>
      <List {...rest} />
    </div>
  );
};
