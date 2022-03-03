import React from "react";
import { pathObj } from "@/types/path";
import { useRouteName } from "@/hooks";
import { ListWithTitleAndDescription } from "../list";
import { Link } from "@bbki.ng/components";
import { ThreeColLayout } from "../layout";

type centerLinkListProps = {
  title?: string;
  description?: any;
  list: pathObj[];
};

export const CenterLinkList = (props: centerLinkListProps) => {
  const { list, title, description } = props;
  const listTitle = title || useRouteName();
  const renderExt = ({ name, path }: any) => {
    return (
      <Link to={path} key={name}>
        {name}
      </Link>
    );
  };

  const renderList = () => (
    <ListWithTitleAndDescription
      items={list}
      itemRenderer={renderExt}
      title={listTitle}
      description={description}
    />
  );
  return <ThreeColLayout middleRenderer={renderList} />;
};
