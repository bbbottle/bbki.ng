import React, { lazy, Suspense } from "react";
import { minDelay } from "@/utils";
import { CenterListWithTitleSkeleton } from "@/components";

const PngLazy = lazy(() => minDelay(import("./extensions/png")));
const Png = () => {
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
      <PngLazy />
    </Suspense>
  );
};

const TxtLazy = lazy(() => minDelay(import("./extensions/txt")));
const Txt = () => (
  <Suspense
    fallback={
      <CenterListWithTitleSkeleton
        titleLength={2}
        listItemWidthArray={[80, 96, 80, 32, 32, 128, 64, 32]}
      />
    }
  >
    <TxtLazy />
  </Suspense>
);

const ExtLazy = lazy(() => minDelay(import("./extensions")));
const Ext = () => {
  return (
    <>
      <Suspense
        fallback={
          <CenterListWithTitleSkeleton titleLength={4} listItemLength={2} />
        }
      >
        <ExtLazy />
      </Suspense>
    </>
  );
};

const TagsLazy = lazy(() => minDelay(import("./tags")));
const Tags = () => (
  <Suspense
    fallback={
      <CenterListWithTitleSkeleton
        titleLength={2}
        listItemLength={2}
        listItemWidthArray={[61, 32]}
      />
    }
  >
    <TagsLazy />
  </Suspense>
);

const TagsResultLazy = lazy(() => minDelay(import("./tags/tag_result")));
const TagsResult = () => (
  <Suspense
    fallback={
      <CenterListWithTitleSkeleton titleLength={2} listItemLength={2} />
    }
  >
    <TagsResultLazy />
  </Suspense>
);

const ArticlePageLazy = lazy(() =>
  minDelay(import("./extensions/txt/article"))
);
const ArticlePage = () => {
  return (
    <Suspense fallback={null}>
      <ArticlePageLazy />
    </Suspense>
  );
};

const PhotoProjectsLazy = lazy(() =>
  minDelay(import("./extensions/png/png_projects"))
);

const PhotoProjects = () => {
  return (
    <Suspense fallback={null}>
      <PhotoProjectsLazy />
    </Suspense>
  );
};

export { Cover } from "./cover";
export { Tags, Ext, Txt, Png, ArticlePage, TagsResult, PhotoProjects };
