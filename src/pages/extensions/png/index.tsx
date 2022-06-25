import React from "react";
import classnames from "classnames";
import { useProjects } from "@/hooks/use_projects";
import { Link, Gallery, ImageRenderer } from "@bbki.ng/components";
import { MySuspense } from "@/components";
import { imageFormatter } from "@/utils";

const Projects = () => {
  const { projects } = useProjects("", true);

  const renderImage: ImageRenderer = (img, index, col) => {
    const project = projects[index];
    return (
      <div
        className={classnames("mb-128", {
          "md:mr-64": col === 0,
          "md:ml-64": col !== 0,
        })}
      >
        <Link to={`/projects/${project.name}`}>
          <div className="invert hover:invert-0 transition-all duration-700">
            {img}
          </div>
        </Link>
      </div>
    );
  };

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
