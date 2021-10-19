import React, { useState } from "react";
import classnames from "classnames";

type videoPlayProps = {
  src: string;
  className?: string;
};

export const VideoPlayer = (props: videoPlayProps) => {
  const { src, className } = props;
  const [showPlayer, setShowPlayer] = useState(false);
  const onLoadedData = () => {
    setShowPlayer(true);
  };
  const cls = classnames(className, { hidden: !showPlayer });
  return (
    <video
      src={src}
      controls
      className={cls}
      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
      disablePictureInPicture
      onLoadedData={onLoadedData}
    />
  );
};
