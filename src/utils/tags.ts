import { MdxArticle } from "@/types/articles";
import { ROUTES } from "@/constants";

export const getAllTags = (mdxArticles: MdxArticle[]): string[] => {
  return Array.from(
    new Set(mdxArticles.map(({ meta }) => meta.tags || []).flat())
  );
};

export const getArticleListByTag = (mdxArticles: MdxArticle[], tag: string) => {
  return mdxArticles
    .filter(({ meta }) => {
      return meta.tags && meta.tags.includes(tag);
    })
    .map(({ meta }) => {
      return {
        to: `${ROUTES.CONTENT}/${meta.title}`,
        name: meta.title,
      };
    });
};
