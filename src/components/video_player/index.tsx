import React, { ReactEventHandler, useState } from "react";
import classnames from "classnames";
import { useVideoControls, useVideoEleHeight, useVideoProgress } from "@/hooks";
import { BlurCover, ProgressBar } from "@/components";
import { TextColors } from "@/types/color";

type videoPlayProps = {
  src: string;
  className?: string;
};

export const VideoPlayer = (props: videoPlayProps) => {
  const { src, className } = props;
  const [hovered, setHovered] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const { videoRef, toggle, isPlay } = useVideoControls();
  const { progress, onTimeUpdate } = useVideoProgress();
  const VideoHeight = useVideoEleHeight(videoRef);

  const onPlayerReady: ReactEventHandler = () => {
    setShowPlayer(true);
  };

  const cls = classnames(className, { hidden: !showPlayer });

  return (
    <div
      className="flex flex-col relative cursor-pointer"
      onClick={toggle}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <video
        ref={videoRef}
        src={src}
        className={cls}
        onTimeUpdate={onTimeUpdate}
        onCanPlayThrough={onPlayerReady}
      />
      {hovered && (
        <BlurCover
          className="mt-40"
          textColor={isPlay ? TextColors.RED : TextColors.BLUE}
          height={VideoHeight}
          visibleOnHover
        >
          {isPlay ? "pause" : "play"}
        </BlurCover>
      )}
      {showPlayer && <ProgressBar progress={progress} />}
    </div>
  );
};
