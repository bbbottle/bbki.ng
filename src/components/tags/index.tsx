import React from "react";
import {
  DisabledText,
  Link,
  List,
  ListWithTitle,
  ThreeColLayout,
} from "@/components";
import { ROUTES } from "@/constants";

type Tags = {
  tags: string[];
  className?: string;
  inline?: boolean;
};

export const Tags = (props: Tags) => {
  const renderTag = (tag: any) => {
    return <Link to={`${ROUTES.TAGS}/${tag}`}>{tag}</Link>;
  };

  const { inline, className, tags } = props;
  if (inline) {
    return (
      <>
        {<DisabledText>标签:</DisabledText>}
        <List
          items={tags}
          itemRenderer={renderTag}
          horizontal={inline}
          className={className}
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
