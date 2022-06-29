import React, { ReactElement, ReactNode, Suspense } from "react";
import { ErrorBoundary, LoadingSpiral } from "@bbki.ng/components";

const Spinner = () => (
  <LoadingSpiral
    multiplier={30000}
    color={[209, 213, 219, 1]}
    spiralConstA={0.04}
    spiralConstB={0.16}
  />
);

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
