import React from "react";
import { ArticleList } from "./consts";
import Tags from "@/pages/tags";
import { LinkList, LinkProps } from "@bbki.ng/components";
import { ROUTE_NAME, ROUTES } from "@/constants";

type TxtProps = {
  title?: string;
  articleList?: LinkProps[];
};

export default (props: TxtProps) => {
  return (
    <LinkList
      links={props.articleList || ArticleList}
      title={props.title || ROUTE_NAME[ROUTES.TXT]}
      description={<Tags inline className="ml-0" withAll />}
    />
  );
};
