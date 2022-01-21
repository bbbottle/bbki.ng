import React from "react";
import { usePaths } from "@/hooks";
import { DisabledText, NonEnWordOffset } from "@/components";
import { Link } from "../link";
import { List } from "../list";

export const Breadcrumb = () => {
  const paths = usePaths();
  const renderNavItem = ({ path, name }: any) => {
    return path ? (
      <>
        <Link to={path}>{name}</Link>
        <DisabledText>/</DisabledText>
      </>
    ) : (
      <DisabledText>
        <NonEnWordOffset>{name}</NonEnWordOffset>
      </DisabledText>
    );
  };

  return (
    <List
      compact
      horizontal
      items={paths}
      itemRenderer={renderNavItem}
      className="min-w-0 flex-wrap"
    />
  );
};
