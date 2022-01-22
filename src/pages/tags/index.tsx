import React from "react";
import { getAllTags } from "@/utils/tags";
import { MdxArticleList } from "@/articles";
import { Tags } from "@/components";

export default () => {
  return <Tags tags={getAllTags(MdxArticleList)} />;
};
