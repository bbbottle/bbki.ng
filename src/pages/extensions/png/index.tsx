import React, { useCallback, useEffect } from "react";
import classnames from "classnames";
import { useProjects } from "@/hooks/use_projects";
import { Link, Gallery, ImageRenderer } from "@bbki.ng/components";
import { MySuspense } from "@/components";
import { imageFormatter } from "@/utils";

const Projects = () => {
  const { projects } = useProjects("", true);
  const renderImage: ImageRenderer = useCallback(
    (img, index, col) => {
      const project = projects[index];
      return (
        <div
          className={classnames("mb-128", {
            "md:mr-64": col === 0,
            "md:ml-64": col !== 0,
          })}
        >
          <Link to={`/projects/${project.name}`}>{img}</Link>
        </div>
      );
    },
    [projects]
  );

  return (
    <Gallery
      images={projects.map((p: any) => p.cover).map(imageFormatter)}
      imageRenderer={renderImage}
    />
  );
};

export default () => {
  return (
    <MySuspense>
      <Projects />
    </MySuspense>
  );
};
