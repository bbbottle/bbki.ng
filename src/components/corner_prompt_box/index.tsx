import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { BgColors } from "@/types/color";

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
    okLabel,
    onCancel,
    cancelLabel,
    content,
    showBox,
    autoCancelAfter,
  } = props;
  const [loading, setLoading] = useState(false);
  const baseButtonCls = "border mr-3 rounded px-2 py-1";
  const primaryButtonCls = classnames("text-white", "disabled:opacity-50", {
    [BgColors.BLUE]: !loading,
  });

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

  const renderOkBtn = () => {
    if (!onOk) {
      return null;
    }
    return (
      <button
        disabled={loading}
        className={classnames(baseButtonCls, primaryButtonCls, {
          [BgColors.LIGHT_BLUE]: loading,
          "cursor-not-allowed	": loading,
        })}
        onClick={handleOk}
      >
        {okLabel || "确定"}
      </button>
    );
  };

  const renderCancelBtn = () => {
    if (!onCancel) {
      return null;
    }
    return (
      <button className={baseButtonCls} onClick={onCancel}>
        {cancelLabel || "取消"}
      </button>
    );
  };

  const renderContent = () => {
    return <div className="mb-5">{content}</div>;
  };

  if (!showBox) {
    return null;
  }

  return (
    <div className="p-0 m-0 w-0 h-0">
      <div className="left-0 bottom-0 m-6 p-3 border rounded z-10 shadow bg-white fixed">
        {renderContent()}
        {renderOkBtn()}
        {renderCancelBtn()}
      </div>
    </div>
  );
};
