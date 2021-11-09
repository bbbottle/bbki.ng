import { compPathObj } from "@/types/path";
import { withArticleWrapper } from "@/components";
import { ROUTES } from "@/constants";
import { MdxArticleList } from "@/articles";

export const ArticleList: compPathObj[] = MdxArticleList.map(
  ({ default: component, meta }) => {
    return {
      path: `${ROUTES.TXT}/${meta.title}`,
      name: meta.title,
      componentProps: {
        tags: meta.tags,
        title: meta.title,
      },
      component: withArticleWrapper(component),
    };
  }
);
