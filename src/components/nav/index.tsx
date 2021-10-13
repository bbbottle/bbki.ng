import React from "react";
import { Link } from "../link";
import { usePaths } from "../../hooks";
import { List } from "../list";
import { DisabledText } from "../disabled_text";

export const Nav = () => {
  const paths = usePaths();
  const renderNavItem = ({ path, label }: any) => {
    return path ? (
      <>
        <Link to={path}>{label}</Link>
        <span className="ml-2">·</span>
      </>
    ) : (
      <DisabledText>{label}</DisabledText>
    );
  };

  return <List horizontal items={paths} itemRenderer={renderNavItem} />;
};
