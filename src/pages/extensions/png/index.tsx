import React from "react";
import { useProjects } from "@/hooks/use_projects";
import { LinkList, LinkListSkeleton } from "@bbki.ng/components";
import { MySuspense } from "@/components";

const Projects = () => {
  const { projects } = useProjects("", true);
  const projectRoutes = projects.map((p: { id: string; name: string }) => ({
    to: p.name,
    name: p.name,
  }));

  return <LinkList links={projectRoutes} title="图片" />;
};

export default () => {
  return (
    <MySuspense
      fallback={
        <LinkListSkeleton titleLength={2} linksLength={[1, 2, 3, 4, 5, 6, 7]} />
      }
    >
      <Projects />
    </MySuspense>
  );
};
