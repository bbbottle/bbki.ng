import { compPathObj } from "@/types/path";
import { withArticleWrapper } from "@/components";
import { ROUTES } from "@/constants";
import * as articles from "@/articles";

export const ArticleList: compPathObj[] = Object.entries(articles).map(
  ([name, component]) => ({
    path: `${ROUTES.TXT}/${name}`,
    name,
    component: withArticleWrapper(component),
  })
);
