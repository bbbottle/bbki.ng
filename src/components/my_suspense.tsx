import React, {
  ReactElement,
  ReactNode,
  Suspense,
  useContext,
  useEffect,
} from "react";
import { ErrorBoundary } from "@bbki.ng/components";
import { GlobalLoadingContext } from "@/global_loading_state_provider";

const LoadingSwitch = (props: { children?: ReactElement }) => {
  const { setIsLoading } = useContext(GlobalLoadingContext);
  useEffect(() => {
    setIsLoading(true);
    return () => {
      setIsLoading(false);
    };
  }, []);

  return props.children || <div />;
};

export const MySuspense = (props: {
  children: ReactNode;
  fallback?: ReactElement;
}) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSwitch>{props.fallback}</LoadingSwitch>}>
        {props.children}
      </Suspense>
    </ErrorBoundary>
  );
};
