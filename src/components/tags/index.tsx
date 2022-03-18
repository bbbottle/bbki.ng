import React from "react";
import classnames from "classnames";
import { List, Tag, Link, TitledList } from "@bbki.ng/components";
import { ROUTES } from "@/constants";

type MyTag =
  | {
      path: string;
      name: string;
    }
  | string;

type Tags = {
  tags: MyTag[];
  className?: string;
  inline?: boolean;
};

export const Tags = (props: Tags) => {
  const { inline, className, tags } = props;

  const renderTag = (tag: MyTag) => {
    const TagComp = inline ? Tag : Link;
    if (typeof tag === "string") {
      return <TagComp to={`${ROUTES.TAGS}/${tag}`}>{tag}</TagComp>;
    }

    return <TagComp to={tag.path}>{tag.name}</TagComp>;
  };

  if (inline) {
    return (
      <>
        <List
          items={tags}
          itemRenderer={renderTag}
          horizontal={inline}
          className={classnames(className, "inline-flex", "flex-wrap")}
        />
      </>
    );
  }
  return (
    <TitledList
      title={"标签"}
      items={tags}
      itemRenderer={renderTag}
      horizontal={inline}
      className={className}
    />
  );
};
