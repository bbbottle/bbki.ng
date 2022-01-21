import React from "react";
import { pathObj } from "@/types/path";
import { TextColors } from "@/types/color";
// import { List } from "../list";
import { FooterLinks } from "./footer_links";
import { Link } from "../link";

export const Footer = () => {
  const renderFooterLink = (l: pathObj) => {
    return (
      <Link
        to={l.path as string}
        external
        color={TextColors.GRAY}
        underlineFirstLetter
      >
        {l.name}
      </Link>
    );
  };

  return renderFooterLink(FooterLinks[0]);
  // return (
  //   <List items={FooterLinks} itemRenderer={renderFooterLink} horizontal />
  // );
};
