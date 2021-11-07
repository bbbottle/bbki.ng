import React, { lazy, Suspense } from "react";
// import { Avi } from "./avi";

const Png = lazy(() => import("./png"));
const Txt = lazy(() => import("./txt"));
const Spinner = () => null;

export const ExtensionsList = [
  {
    path: "/ext/txt",
    name: "txt",
    component: () => {
      return (
        <Suspense fallback={<Spinner />}>
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
        <Suspense fallback={<Spinner />}>
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
