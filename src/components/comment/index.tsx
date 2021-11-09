import React from "react";
import classnames from "classnames";
import { ReactCusdis } from "react-cusdis";
import { BgColors } from "@/types/color";
import { useIframeReady } from "@/hooks/use_iframe_ready";
import { CUSDIS_ATTRS } from "@/constants/cusdis";

type CommentProps = {
  title: string;
};

export const Comment = (props: CommentProps) => {
  const path = location.href;
  const cusdisAttrs = Object.assign({}, CUSDIS_ATTRS, {
    pageTitle: props.title,
    pageUrl: path,
    pageId: path,
  });

  const ready = useIframeReady(3000);

  return (
    <div
      className={classnames(
        "overflow-hidden",
        "transition-all",
        BgColors.WHITE_GRAY,
        {
          "max-h-0": !ready,
          "p-5": ready,
          "mb-8": ready,
        }
      )}
    >
      <ReactCusdis attrs={cusdisAttrs} />
    </div>
  );
};
