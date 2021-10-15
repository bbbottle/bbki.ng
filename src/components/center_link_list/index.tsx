import React from "react";
import { List } from "../list";
import { Link } from "../link";
import { AlmostCenterLayout } from "../layout";
import { pathObj } from "../../types/path";

type centerLinkListProps = {
  list: pathObj[];
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
