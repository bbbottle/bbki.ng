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
    <>
      <img src="/Logo.svg" width="24" className="mr-6" alt="logo" />
      <List
        compact
        horizontal
        items={paths}
        itemRenderer={renderNavItem}
        className="min-w-0 flex-wrap"
      />
    </>
  );
};
