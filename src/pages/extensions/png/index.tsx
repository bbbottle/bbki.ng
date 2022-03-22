import React from "react";
import { useProjects } from "@/hooks/use_projects";
import { Error, LinkList, LinkListSkeleton } from "@bbki.ng/components";

export default () => {
  const { projects, isLoading, isError } = useProjects();
  if (isError) {
    return <Error error={isError} />;
  }

  if (isLoading) {
    return <LinkListSkeleton titleLength={2} linksLength={[3, 4, 3, 5, 4]} />;
  }
  const projectRoutes = projects.map((p: { id: string; name: string }) => ({
    to: p.name,
    name: p.name,
  }));

  return <LinkList links={projectRoutes} title="图片" />;
};
