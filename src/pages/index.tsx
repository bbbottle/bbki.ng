import React, { lazy, Suspense } from "react";
import { minDelay } from "@/utils";

const NowLazy = lazy(() => minDelay(import("./now")));
const NowPage = () => {
  return (
    <Suspense fallback={null}>
      <NowLazy />
    </Suspense>
  );
};

export { Cover } from "./cover";
export { NowPage };
