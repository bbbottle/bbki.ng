import React, { lazy, Suspense } from "react";
import { CenterListWithTitleSkeleton } from "@/components";
// import { Avi } from "./avi";

const Png = lazy(() => import("./png"));
const Txt = lazy(() => import("./txt"));

export const ExtensionsList = [
  {
    path: "/ext/txt",
    name: "txt",
    component: () => {
      return (
        <Suspense
          fallback={
            <CenterListWithTitleSkeleton
              titleLength={2}
              listItemLength={4}
              listItemWidthArray={[80, 80, 32, 32]}
            />
          }
        >
          <Txt />
        </Suspense>
      );
    },
  },
  {
    path: "/ext/png",
    name: "png",
    component: () => {
      return (
        <Suspense
          fallback={
            <CenterListWithTitleSkeleton
              titleLength={2}
              listItemLength={4}
              listItemWidthArray={[48, 64, 32, 64]}
            />
          }
        >
          <Png />
        </Suspense>
      );
    },
  },
  // {
  //   path: "/ext/avi",
  //   name: "avi",
  //   component: Avi,
  // },
];
