import React, { useState } from "react";
import classnames from "classnames";

type videoPlayProps = {
  src: string;
  className?: string;
};

export const VideoPlayer = (props: videoPlayProps) => {
  const { src, className } = props;
  const [canPlay, setCanPlay] = useState(false);
  const onCanPlay = () => {
    setCanPlay(true);
  };
  const cls = classnames(className, { hidden: !canPlay });
  return (
    <video
      src={src}
      controls
      className={cls}
      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
      disablePictureInPicture
      onCanPlayThrough={onCanPlay}
    />
  );
};
