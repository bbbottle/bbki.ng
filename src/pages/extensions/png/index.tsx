import React from "react";
import { CenterLinkList, CenterListWithTitleSkeleton } from "@/components";
import { useProjects } from "@/hooks/use_projects";

export default () => {
  const { projects, isLoading, isError } = useProjects();
  if (isError) {
    return null;
  }
  if (isLoading) {
    return (
      <CenterListWithTitleSkeleton
        titleLength={2}
        listItemWidthArray={[16 * 4, 16 * 3, 16 * 4, 16 * 4]}
      />
    );
  }
  const projectRoutes = projects.map((p: { id: string; name: string }) => ({
    path: p.name,
    name: p.name,
  }));
  return <CenterLinkList list={projectRoutes} title="图片" />;
};
