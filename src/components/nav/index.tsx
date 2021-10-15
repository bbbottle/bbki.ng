import React from "react";
import { Link } from "../link";
import { usePaths } from "../../hooks";
import { List } from "../list";
import { DisabledText } from "../disabled_text";

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
