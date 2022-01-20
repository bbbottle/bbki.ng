import React from "react";
import classnames from "classnames";
import {
  DisabledText,
  Link,
  List,
  ListWithTitle,
  ThreeColLayout,
} from "@/components";
import { ROUTES } from "@/constants";
import { TextColors } from "@/types/color";

type Tags = {
  tags: string[];
  className?: string;
  inline?: boolean;
};

export const Tags = (props: Tags) => {
  const { inline, className, tags } = props;

  const renderTag = (tag: any) => {
    if (inline) {
      return (
        <Link to={`${ROUTES.TAGS}/${tag}`} color={TextColors.GRAY}>
          <small>#{tag}</small>
        </Link>
      );
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
