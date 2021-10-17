import React from "react";

type videoPlayProps = {
  src: string;
  className?: string;
};

export const VideoPlayer = (props: videoPlayProps) => {
  const { src, className } = props;
  return <video src={src} controls className={className} />;
};
