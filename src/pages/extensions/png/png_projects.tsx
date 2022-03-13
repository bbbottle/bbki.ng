import React from "react";
import {
  CenterListWithTitleSkeleton,
  DisabledText,
  ImgList,
} from "@/components";
import { useParams } from "react-router-dom";
import { useProjects } from "@/hooks/use_projects";
import { AuthRequired } from "@/auth_required";
import { DropImage } from "@bbki.ng/components";

const imageFormatter = (image: any) => {
  const { rendered_width, thumbnail_src, avg_color, process_type, ...rest } =
    image;
  return {
    renderedWidth: rendered_width,
    thumbnailSrc: thumbnail_src,
    avgColor: avg_color,
    processType: process_type,
    ...rest,
  };
};

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

  const descriptionJSX = (
    <>
      <DisabledText className="block">{projects.description}</DisabledText>
    </>
  );

  const renderUploader = () => (
    <AuthRequired shouldBeKing>
      <DropImage
        className="mb-128"
        placeholder={<DisabledText>丢进来上传</DisabledText>}
        uploader={() => {
          return Promise.resolve(true);
        }}
      />
      <span className="block mb-128">&nbsp;</span>
    </AuthRequired>
  );

  return (
    <ImgList
      title={projects.name}
      className=""
      imgList={projects.images.map(imageFormatter)}
      description={descriptionJSX}
      beforeListRenderer={renderUploader}
    />
  );
};
