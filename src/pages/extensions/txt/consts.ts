import { MdxArticleList } from "@/articles";

export const ArticleList = MdxArticleList.map(({ meta }) => {
  return {
    path: meta.title,
    name: meta.title,
  };
});
