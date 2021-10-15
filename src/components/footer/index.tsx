import React from "react";
import { pathObj } from "@/types/path";
import { List } from "../list";
import { FooterLinks } from "./footer_links";
import { Link } from "../link";
import { LeftRightLayout } from "../layout";

export const Footer = () => {
  const renderFooterLink = (l: pathObj) => {
    return (
      <Link to={l.path as string} external color="gray">
        {l.name}
      </Link>
    );
  };

  const renderList = () => {
    return (
      <List items={FooterLinks} itemRenderer={renderFooterLink} horizontal />
    );
  };

  const renderEmpty = () => null;

  return (
    <LeftRightLayout
      leftRenderer={renderEmpty}
      rightRenderer={renderList}
      approximately
    />
  );
};
