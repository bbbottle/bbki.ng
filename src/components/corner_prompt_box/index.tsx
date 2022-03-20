import React, { EventHandler, useEffect } from "react";
import { PopConfirm } from "@bbki.ng/components";

type cornerPromptBoxProps = {
  okLabel?: string;
  onOk?: (() => void) | null;
  onCancel?: (() => void) | null;
  cancelLabel?: string;
  autoCancelAfter?: number;
  content: string;
  showBox: boolean;
};

export const CornerPromptBox = (props: cornerPromptBoxProps) => {
  const { onOk, onCancel, content, showBox, autoCancelAfter } = props;

  useEffect(() => {
    if (!autoCancelAfter || !onCancel || !showBox) {
      return;
    }
    const timerId = setTimeout(() => {
      onCancel();
    }, autoCancelAfter);

    return () => {
      clearTimeout(timerId);
    };
  }, [showBox]);

  const handleOk = async () => {
    if (!onOk) {
      return;
    }
    return onOk;
  };

  if (!showBox) {
    return null;
  }

  return (
    <div className="p-0 m-0 w-0 h-0">
      <div className="left-0 bottom-0 m-32 z-10 bg-white fixed">
        <PopConfirm
          onOk={handleOk}
          onCancel={
            onCancel as EventHandler<React.MouseEvent<HTMLButtonElement>>
          }
        >
          {content}
        </PopConfirm>
      </div>
    </div>
  );
};
