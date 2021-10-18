import React from "react";
import { pathObj } from "@/types/path";
import { useRouteName } from "@/hooks";
import { ListWithTitle } from "../list";
import { Link } from "../link";
import { ThreeColLayout } from "../layout";

type centerLinkListProps = {
  list: pathObj[];
};

export const CenterLinkList = (props: centerLinkListProps) => {
  const { list } = props;
  const name = useRouteName();
  const renderExt = ({ name, path }: any) => {
    return <Link to={path}>{name}</Link>;
  };

  const renderList = () => (
    <ListWithTitle items={list} itemRenderer={renderExt} title={name} />
  );
  return <ThreeColLayout middleRenderer={renderList} />;
};
