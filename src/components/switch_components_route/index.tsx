import React from "react";
import { Switch, Route } from "react-router-dom";
import { compPathObj } from "@/types/path";
import { CenterLinkList } from "@/components";

type switchComponentsRouteProps = {
  componentPathList: compPathObj[];
};

export const SwitchComponentsRoute = (props: switchComponentsRouteProps) => {
  const { componentPathList } = props;
  return (
    <Switch>
      {componentPathList.map(({ path, name, component: Comp }) => {
        return (
          <Route path={path} key={name}>
            <Comp />
          </Route>
        );
      })}
      <Route>
        <CenterLinkList list={componentPathList} />
      </Route>
    </Switch>
  );
};
