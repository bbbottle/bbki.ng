import {
  ReactEventHandler,
  useRef,
  useState,
  RefObject,
  useEffect,
} from "react";

export const useVideoControls = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setIsPlay] = useState(false);

  const toggle = async () => {
    const { current: video } = videoRef;

    if (!video) return;

    if (video.paused || video.ended) {
      await video.play();
      setIsPlay(true);
      return;
    }
    video.pause();
    setIsPlay(false);
  };

  const isEnd = videoRef && videoRef.current && videoRef.current.ended;

  return {
    videoRef,
    isPlay: isPlay && !isEnd,
    toggle,
  };
};

export const useVideoProgress = () => {
  const [progress, setProgress] = useState(0);
  const onTimeUpdate: ReactEventHandler<HTMLVideoElement> = (event) => {
    const video = event.currentTarget;
    if (!video.duration) {
      setProgress(0);
      return;
    }
    setProgress(video.currentTime / video.duration);
  };

  return { progress, onTimeUpdate };
};

export const useVideoEleHeight = (
  videoRef: RefObject<HTMLVideoElement>
): number => {
  const [height, setHeight] = useState(0);
  const updateHeight = () => {
    if (!videoRef.current) {
      return;
    }
    const { height } = videoRef.current.getBoundingClientRect();
    setHeight(height);
  };

  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(updateHeight);
  return height;
};
