import React, { ReactElement, ReactNode, Suspense } from "react";
import { ErrorBoundary, Spinner } from "@bbki.ng/components";

const CenterSpinner = () => (
  <div className="grid place-content-center	overflow-hidden">
    <Spinner pathClassName="stroke-gray-200" />
  </div>
);

export const MySuspense = (props: {
  children: ReactNode;
  fallback?: ReactElement;
}) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<CenterSpinner />}>{props.children}</Suspense>
    </ErrorBoundary>
  );
};
