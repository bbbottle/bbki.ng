import React from "react";
import { List } from "../list";
import { FooterLinks } from "./footer_links";
import { Link } from "../link";

export const Footer = () => {
  const renderFooterLink = (l: any) => {
    return (
      <Link to={l.link} external color="gray">
        {l.text}
      </Link>
    );
  };

  return (
    <List items={FooterLinks} itemRenderer={renderFooterLink} horizontal />
  );
};
