import { compPathObj } from "@/types/path";
import { withArticleWrapper } from "@/components";
import { ROUTES } from "@/constants";
import { MdxArticleList } from "@/articles";

export const ArticleList: compPathObj[] = MdxArticleList.map(
  // @ts-ignore
  ({ default: component, meta }) => {
    return {
      path: `${ROUTES.TXT}/${meta.title}`,
      name: meta.title,
      componentProps: {
        tags: meta.tags,
      },
      component: withArticleWrapper(component),
    };
  }
);
