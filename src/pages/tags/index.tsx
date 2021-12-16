import React from "react";
import { Switch, Route, match } from "react-router-dom";
import Txt from "@/pages/extensions/txt";
import { getAllTags, getArticleListByTag } from "@/utils/tags";
import { MdxArticleList } from "@/articles";
import { ROUTES } from "@/constants";
import { Tags } from "@/components";

type TxtByTagProps = {
  match: match<{ tag: string }>;
};

const TxtByTag = (props: TxtByTagProps) => {
  const tag = props.match.params.tag;
  return (
    <Txt
      title={`标签：${tag}`}
      articleList={getArticleListByTag(MdxArticleList, tag)}
    />
  );
};

export default () => {
  return (
    <Switch>
      <Route path={`${ROUTES.TAGS}/:tag`} component={TxtByTag} />
      <Route path={ROUTES.TAGS}>
        <Tags tags={getAllTags(MdxArticleList)} />
      </Route>
    </Switch>
  );
};
