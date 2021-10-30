import React, { ReactEventHandler, useState } from "react";
import classnames from "classnames";
import { useVideoControls, useVideoEleHeight, useVideoProgress } from "@/hooks";
import { BlurCover, ProgressBar } from "@/components";
import { BgColors, TextColors } from "@/types/color";
import { AspectRatioBox } from "@/components/aspect_ratio_box";
import { VIDEO_TAG_ASPECT_RATIO } from "@/constants";

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

  const cls = classnames({ hidden: !showPlayer });

  return (
    <div
      className={classnames(
        "flex flex-col relative cursor-pointer",
        className,
        BgColors.LIGHT_GRAY
      )}
      onClick={toggle}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <AspectRatioBox
        width="100%"
        hwRatio={VIDEO_TAG_ASPECT_RATIO}
        className={BgColors.LIGHT_GRAY}
      >
        <video
          ref={videoRef}
          src={src}
          className={cls}
          onTimeUpdate={onTimeUpdate}
          onCanPlayThrough={onPlayerReady}
        />
      </AspectRatioBox>
      {hovered && (
        <BlurCover
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
