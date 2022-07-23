import React, { useContext, useEffect } from "react";
import { GlobalLoadingContext } from "@/global_loading_state_provider";
import { LoadingSpiral } from "@bbki.ng/components";

export const Spinner = (props: any) => {
  const {
    disableDotIndicator,
    multiplier = 10000,
    color = [209, 213, 219, 1],
    offset = -0.3,
    length = 0.3,
    radius = 0.056,
  } = props;
  const { setIsLoading } = useContext(GlobalLoadingContext);

  useEffect(() => {
    if (disableDotIndicator) {
      return;
    }
    setIsLoading(true);
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <LoadingSpiral
      multiplier={multiplier}
      color={color}
      offset={offset}
      length={length}
      radius={radius}
    />
  );
};
