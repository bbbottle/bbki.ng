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

  return (
    <>
      <img src="/Logo.svg" width="24" className="mr-2" alt="logo" />
      <span className="mr-2">·</span>
      <List
        horizontal
        items={paths}
        itemRenderer={renderNavItem}
        className="min-w-0 flex-wrap"
      />
    </>
  );
};
