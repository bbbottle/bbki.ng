import { useEffect } from "react";
import { cusdisEvent } from "../../types/cusdis";

type cusdisEventHandlers = {
  handleCommentLoaded?: () => void;
  handleCommentSent?: () => void;
};

const noop = () => null;

export const useCusidsEvent = (handlers: cusdisEventHandlers) => {
  const { handleCommentLoaded = noop, handleCommentSent = noop } = handlers;
  const onMessage = (e: MessageEvent) => {
    try {
      const msg = JSON.parse(e.data);
      if (msg.from === "cusdis") {
        switch (msg.event) {
          case cusdisEvent.COMMENTS_LOADED:
            handleCommentLoaded();
            break;
          case cusdisEvent.COMMENT_SENT:
            handleCommentSent();
            break;
          default:
            return;
        }
      }
    } catch (e) {}
  };

  useEffect(() => {
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);
};
