import React from "react";
import { Switch, Route } from "react-router-dom";
import { JPGProjectList } from "./consts";
import { CenterLinkList, JpgList } from "@/components";

export const Png = () => {
  return (
    <Switch>
      {JPGProjectList.map(({ path, name, imgList }) => {
        return (
          <Route path={path} key={name}>
            <JpgList srcList={imgList} classNames="mt-40" />
          </Route>
        );
      })}
      <Route>
        <CenterLinkList list={JPGProjectList} />
      </Route>
    </Switch>
  );
};
