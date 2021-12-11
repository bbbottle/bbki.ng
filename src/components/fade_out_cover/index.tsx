import React, { FunctionComponent, useEffect, useState } from "react";
import classnames from "classnames";
import { DEFAULT_DELAY } from "@/constants";

type FadeOutCoverProps = {
  duration: number; // ms
  coverColor: string;
};

export const FadeOutCover: FunctionComponent<FadeOutCoverProps> = (props) => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      setHidden(true);
    }, props.duration || DEFAULT_DELAY);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <div
      style={{
        backgroundColor: props.coverColor || "#fff",
      }}
      className={classnames(
        "transition-opacity",
        "h-full",
        "w-full",
        "absolute",
        "opacity-100",
        {
          "opacity-0": hidden,
        }
      )}
    />
  );
};
