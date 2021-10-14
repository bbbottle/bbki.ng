import React from "react";
import { List } from "../list";
import { FooterLinks } from "./footer_links";
import { Link } from "../link";
import { LeftRightLayout } from "../layout";

export const Footer = () => {
  const renderFooterLink = (l: any) => {
    return (
      <Link to={l.link} external color="gray">
        {l.text}
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
