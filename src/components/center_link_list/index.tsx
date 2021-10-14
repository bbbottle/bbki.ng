import React from "react";
import { List } from "../list";
import { Link } from "../link";
import { AlmostCenterLayout } from "../layout";

type link = {
  path: string;
  name: string;
};

type centerLinkListProps = {
  list: link[];
};

export const CenterLinkList = (props: centerLinkListProps) => {
  const { list } = props;
  const renderExt = ({ name, path }: any) => {
    return <Link to={path}>{name}</Link>;
  };

  return (
    <AlmostCenterLayout>
      <List items={list} itemRenderer={renderExt} />
    </AlmostCenterLayout>
  );
};
