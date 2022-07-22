import React, { ReactElement, ReactNode, Suspense } from "react";
import { Spinner } from "./Spinner";
import { ErrorBoundary } from "@bbki.ng/components";

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
