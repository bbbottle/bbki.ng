import React, {
  ReactElement,
  ReactNode,
  Suspense,
  useContext,
  useEffect,
} from "react";
import { ErrorBoundary, LoadingSpiral } from "@bbki.ng/components";
import { GlobalLoadingContext } from "@/global_loading_state_provider";

const Spinner = () => {
  const { setIsLoading } = useContext(GlobalLoadingContext);

  useEffect(() => {
    setIsLoading(true);
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <LoadingSpiral
      multiplier={10000}
      color={[209, 213, 219, 1]}
      spiralConstA={0.04}
      spiralConstB={0.16}
      offset={-0.3}
    />
  );
};

export const MySuspense = (props: {
  children: ReactNode;
  fallback?: ReactElement;
}) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>{props.children}</Suspense>
    </ErrorBoundary>
  );
};
