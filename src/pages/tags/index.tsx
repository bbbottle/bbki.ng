import React from "react";
import { getAllTags } from "@/utils/tags";
import { MdxArticleList } from "@/articles";
import { Tags } from "@/components";
import { ROUTES } from "@/constants";

type tag =
  | {
      path: string;
      name: string;
    }
  | string;

export default (props: {
  inline?: boolean;
  className?: string;
  withAll?: boolean;
}) => {
  const tags = [...getAllTags(MdxArticleList)] as tag[];

  if (props.withAll) {
    tags.unshift({
      path: ROUTES.CONTENT,
      name: "全部",
    });
  }
  return <Tags tags={tags} {...props} />;
};
