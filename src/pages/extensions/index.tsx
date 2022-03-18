import React from "react";
import { ExtensionsList } from "./consts";
import { ROUTE_NAME, ROUTES } from "@/constants";
import { Article, List, Link } from "@bbki.ng/components";

export default () => {
  const renderExt = ({ name, path }: any) => {
    return (
      <Link to={path} key={name}>
        {name}
      </Link>
    );
  };

  return (
    <Article title={ROUTE_NAME[ROUTES.EXT]}>
      <List items={ExtensionsList} itemRenderer={renderExt} />
    </Article>
  );
};
