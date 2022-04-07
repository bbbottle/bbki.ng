import React from "react";
import { Img } from "@/components";

export const Stickers = () => {
  return (
    <div className="fixed bottom-256 right-128">
      <Img
        size="large"
        src="https://zjh-im-res.oss-cn-shenzhen.aliyuncs.com/image/stickers/sticker-water-delivery.jpg"
        className="-rotate-[32.95deg] relative -top-64"
        width={126}
        height={59}
        renderedWidth={126}
      />
      <Img
        size="large"
        src="https://zjh-im-res.oss-cn-shenzhen.aliyuncs.com/image/stickers/sticker-lock.jpg"
        className="rotate-[10.77deg]"
        width={93}
        height={50}
        renderedWidth={93}
      />
    </div>
  );
};
