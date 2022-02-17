import React from "react";
import { CenterListWithTitleSkeleton, ImgList } from "@/components";
import { useParams } from "react-router-dom";
import { useProjects } from "@/hooks/use_projects";

export default () => {
  const { id } = useParams();
  const { projects, isError, isLoading } = useProjects(id);

  if (isError) {
    return null;
  }

  if (isLoading) {
    return (
      <CenterListWithTitleSkeleton
        titleLength={2}
        listItemWidthArray={[16 * 10]}
      />
    );
  }
  return (
    <ImgList
      title={projects.name}
      className=""
      imgList={projects.images}
      description={projects.description}
    />
  );
};
