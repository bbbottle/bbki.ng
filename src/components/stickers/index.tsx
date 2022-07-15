import React from "react";
import { Img } from "@bbki.ng/components";
import { NavLink, useLocation } from "react-router-dom";

export const Stickers = () => {
  const { pathname } = useLocation();

  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="fixed bottom-128 md:bottom-256 right-16 z-10 md:right-64">
      <NavLink to="projects">
        <Img
          size="large"
          src="https://zjh-im-res.oss-cn-shenzhen.aliyuncs.com/image/stickers/sticker-water-delivery.jpg"
          className="-rotate-[32.95deg] relative top-0 md:-top-64 left-64 md:left-[unset]"
          width={126}
          height={59}
          renderedWidth={126}
        />
      </NavLink>
      <NavLink to="404">
        <Img
          size="large"
          src="https://zjh-im-res.oss-cn-shenzhen.aliyuncs.com/image/stickers/sticker-lock.jpg"
          className="rotate-[10.77deg] relative left-64 md:left-[unset]"
          width={93}
          height={50}
          renderedWidth={93}
        />
      </NavLink>
      <NavLink to="blog">
        <Img
          size="large"
          src="https://zjh-im-res.oss-cn-shenzhen.aliyuncs.com/image/stickers/bar-code.jpg"
          className="-rotate-[13.37deg] relative top-64 left-64 md:left-[unset] md:right-256 md:top-128"
          width={176}
          height={60}
          renderedWidth={176}
        />
      </NavLink>
    </div>
  );
};
