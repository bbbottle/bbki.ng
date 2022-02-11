import React from "react";
import { default as MdxArticleComp, meta } from "@/articles/now.mdx";
import { withArticleWrapper } from "@/components";

const Article = withArticleWrapper(MdxArticleComp);

export default () => <Article {...meta} />;
