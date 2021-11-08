import React from "react";
import { Switch, Route } from "react-router-dom";
import { compPathObj } from "@/types/path";
import { CenterLinkList } from "@/components";

type switchComponentsRouteProps = {
  title?: string;
  componentPathList: compPathObj[];
};

export const SwitchComponentsRoute = (props: switchComponentsRouteProps) => {
  const { componentPathList, title } = props;
  return (
    <Switch>
      {componentPathList.map(
        ({ path, name, component: Comp, componentProps = {} }) => {
          return (
            <Route path={path} key={name}>
              <Comp {...componentProps} />
            </Route>
          );
        }
      )}
      <Route>
        <CenterLinkList list={componentPathList} title={title} />
      </Route>
    </Switch>
  );
};
