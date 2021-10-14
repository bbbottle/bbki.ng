import React from "react";
import { Switch, Route } from "react-router-dom";
import { JPGProjectList } from "./consts";
import { JpgList } from "./jpg_list";
import { Link, List } from "../../../components";

export const Jpg = () => {
  const renderProjects = (p: any) => {
    return <Link to={p.path}>{p.name}</Link>;
  };

  return (
    <Switch>
      {JPGProjectList.map(({ path, name, imgList }) => {
        return (
          <Route path={path} key={name}>
            <JpgList srcList={imgList} />
          </Route>
        );
      })}
      <Route>
        <List items={JPGProjectList} itemRenderer={renderProjects} />
      </Route>
    </Switch>
  );
};
