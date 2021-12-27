import React, { useState } from "react";
import classnames from "classnames";
import { ReactCusdis } from "react-cusdis";
import { BgColors } from "@/types/color";
import { CUSDIS_ATTRS, CUSDIS_OFFICIAL_SITE_ADDRESS } from "@/constants/cusdis";
import { useCusidsEvent } from "@/components/comment/use_cusdis_event";
import { CornerPromptBox } from "@/components";
import { Link, LinkColor } from "@bbki.ng/components";

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

  const [ready, setReady] = useState(false);
  const [showBox, setShowBox] = useState(false);

  useCusidsEvent({
    handleCommentLoaded: () => {
      setReady(true);
    },
    handleCommentSent: () => {
      setShowBox(true);
    },
  });

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
      <CornerPromptBox
        autoCancelAfter={3000}
        content="评论已发送，等待 18+ 内容审核。"
        showBox={showBox}
        cancelLabel="关闭"
        onCancel={() => {
          console.log("cancel");
          setShowBox(false);
        }}
      />
      <div className="text-center">
        <Link
          to={CUSDIS_OFFICIAL_SITE_ADDRESS}
          external
          color={LinkColor.GRAY}
          className="px-1"
        >
          powered by discus
        </Link>
      </div>
    </div>
  );
};
