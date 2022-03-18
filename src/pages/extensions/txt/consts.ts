import { MdxArticleList } from "@/articles";

export const ArticleList = MdxArticleList.map(({ meta }) => {
  return {
    to: meta.title,
    name: meta.title,
  };
});
