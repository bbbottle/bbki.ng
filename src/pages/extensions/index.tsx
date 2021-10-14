import React from "react";
import { Switch, Route } from "react-router-dom";
import { CenterLinkList } from "../../components/";
import { ExtensionsList } from "./consts";

export const Extensions = () => {
  return (
    <Switch>
      {ExtensionsList.map(({ path, name, component: Comp }) => {
        return (
          <Route path={path} key={name}>
            <Comp />
          </Route>
        );
      })}
      <Route>
        <CenterLinkList list={ExtensionsList} />
      </Route>
    </Switch>
  );
};
