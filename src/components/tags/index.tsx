import React from "react";
import classnames from "classnames";
import { List, ListWithTitle, ThreeColLayout } from "@/components";
import { Tag, Link } from "@bbki.ng/components";
import { ROUTES } from "@/constants";

type Tags = {
  tags: string[];
  className?: string;
  inline?: boolean;
};

export const Tags = (props: Tags) => {
  const { inline, className, tags } = props;

  const renderTag = (tag: any) => {
    if (inline) {
      return <Tag to={`${ROUTES.TAGS}/${tag}`}>{tag}</Tag>;
    }

    return <Link to={`${ROUTES.TAGS}/${tag}`}>{tag}</Link>;
  };

  if (inline) {
    return (
      <>
        <List
          items={tags}
          itemRenderer={renderTag}
          horizontal={inline}
          className={classnames(className, "inline-flex", "ml-3")}
        />
      </>
    );
  }
  const renderList = () => (
    <ListWithTitle
      title={"标签"}
      items={tags}
      itemRenderer={renderTag}
      horizontal={inline}
      className={className}
    />
  );
  return <ThreeColLayout middleRenderer={renderList} />;
};
