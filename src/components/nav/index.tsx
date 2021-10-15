import React from "react";
import { usePaths } from "@/hooks";
import { DisabledText, NonEnWordOffset } from "@/components";
import { Link } from "../link";
import { List } from "../list";

export const Nav = () => {
  const paths = usePaths();
  const renderNavItem = ({ path, name }: any) => {
    return path ? (
      <>
        <Link to={path} underlineFirstLetter>
          {name}
        </Link>
        <span className="ml-2">·</span>
      </>
    ) : (
      <DisabledText>
        <NonEnWordOffset>{name}</NonEnWordOffset>
      </DisabledText>
    );
  };

  return <List horizontal items={paths} itemRenderer={renderNavItem} />;
};
