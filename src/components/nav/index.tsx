import React from "react";
import { usePaths } from "@/hooks";
import { DisabledText } from "@/components";
import { Link } from "../link";
import { List } from "../list";

export const Nav = () => {
  const paths = usePaths();
  const renderNavItem = ({ path, name }: any) => {
    return path ? (
      <>
        <Link to={path}>{name}</Link>
        <span className="ml-2">·</span>
      </>
    ) : (
      <DisabledText>{name}</DisabledText>
    );
  };

  return <List horizontal items={paths} itemRenderer={renderNavItem} />;
};
