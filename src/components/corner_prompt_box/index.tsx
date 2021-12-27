import React, {
  EventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import classnames from "classnames";
import { BgColors } from "@/types/color";
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
  const {
    onOk,
    // okLabel,
    onCancel,
    // cancelLabel,
    content,
    showBox,
    autoCancelAfter,
  } = props;
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    await onOk();
    setLoading(false);
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
        {/*{renderContent()}*/}
        {/*{renderOkBtn()}*/}
        {/*{renderCancelBtn()}*/}
      </div>
    </div>
  );
};
