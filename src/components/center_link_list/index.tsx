import React from "react";
import { pathObj } from "@/types/path";
import { useRouteName } from "@/hooks";
import { ListWithTitle } from "../list";
import { Link } from "../link";
import { ThreeColLayout } from "../layout";

type centerLinkListProps = {
  title?: string;
  list: pathObj[];
};

export const CenterLinkList = (props: centerLinkListProps) => {
  const { list, title } = props;
  const listTitle = title || useRouteName();
  const renderExt = ({ name, path }: any) => {
    return (
      <Link to={path} key={name}>
        {name}
      </Link>
    );
  };

  const renderList = () => (
    <ListWithTitle items={list} itemRenderer={renderExt} title={listTitle} />
  );
  return <ThreeColLayout middleRenderer={renderList} />;
};
