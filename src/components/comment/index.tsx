import React from "react";
import classnames from "classnames";
import { useCusdisAttr } from "@/hooks/use_cusdis_attr";
import { ReactCusdis } from "react-cusdis";
import { BgColors } from "@/types/color";
import { useIframeReady } from "@/hooks/use_iframe_ready";

type CommentProps = {
  title: string;
};

export const Comment = (props: CommentProps) => {
  const cusdisAttrs = useCusdisAttr(props.title);
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
