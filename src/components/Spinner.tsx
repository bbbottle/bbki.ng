import React, { useContext, useEffect } from "react";
import { GlobalLoadingContext } from "@/global_loading_state_provider";
import { LoadingSpiral } from "@bbki.ng/components";

export const Spinner = (props: {
  disableDotIndicator?: boolean;
  offset?: number;
}) => {
  const { disableDotIndicator, offset = -0.3 } = props;
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
      multiplier={50000}
      color={[209, 213, 219, 1]}
      offset={offset}
      length={0.15}
      radius={0.028}
    />
  );
};
