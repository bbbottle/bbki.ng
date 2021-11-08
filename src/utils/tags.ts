import { MdxArticle } from "@/types/articles";
import { ROUTES } from "@/constants";
import { withArticleWrapper } from "@/components";

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
    .map(({ default: Component, meta }) => {
      return {
        path: `${ROUTES.TXT}/${meta.title}`,
        name: meta.title,
        componentProps: {
          tags: meta.tags,
        },
        component: withArticleWrapper(Component),
      };
    });
};