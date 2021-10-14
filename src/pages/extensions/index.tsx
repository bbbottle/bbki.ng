import React from "react";
import { Switch, Route } from "react-router-dom";
import { ExtensionsList } from "./consts";
import { List, Link } from "../../components";

export const Extensions = () => {
  const renderExt = ({ ext, path }: any) => {
    return <Link to={path}>{ext}</Link>;
  };

  return (
    <Switch>
      {ExtensionsList.map(({ path, ext, component: Comp }) => {
        return (
          <Route path={path} key={ext}>
            <Comp />
          </Route>
        );
      })}
      <Route>
        <List items={ExtensionsList} itemRenderer={renderExt} />
      </Route>
    </Switch>
  );
};
