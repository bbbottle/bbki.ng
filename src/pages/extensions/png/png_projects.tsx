import React from "react";
import { PHOTO_PROJECTS } from "@/constants";
import { ImgList } from "@/components";
import { ReactElement } from "react";
import { useParams } from "react-router-dom";

type TProjectsMap = {
  [key: string]: ReactElement;
};
const ProjectsMap: TProjectsMap = {};

PHOTO_PROJECTS.forEach(({ name, images: imgList, description }) => {
  const Comp = ImgList;
  ProjectsMap[name] = (
    <Comp
      imgList={imgList}
      title={name}
      description={description}
      className=""
    />
  );
});

export default () => {
  const { title } = useParams();
  if (!title) {
    return null;
  }

  return ProjectsMap[title];
};
