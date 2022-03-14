import React, { useState } from "react";
import {
  CenterListWithTitleSkeleton,
  DisabledText,
  ImgList,
} from "@/components";
import { useParams } from "react-router-dom";
import { useProjects } from "@/hooks/use_projects";
import { AuthRequired } from "@/auth_required";
import { DropImage, BlinkDot } from "@bbki.ng/components";

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
  const [uploading, setUploading] = useState(false);
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

  const renderUploader = () => (
    <AuthRequired shouldBeKing>
      <DropImage
        className="mb-256"
        onUploadFinish={() => {
          setUploading(false);
        }}
        uploader={() => {
          setUploading(true);
          return Promise.resolve(true);
        }}
        ghost
      >
        {() => {
          if (!uploading) {
            return null;
          }

          return <BlinkDot className="ml-8" />;
        }}
      </DropImage>
    </AuthRequired>
  );

  const renderTitle = () => {
    return (
      <div className="flex items-start">
        {projects.name}
        {renderUploader()}
      </div>
    );
  };
  return (
    <ImgList
      title={renderTitle()}
      className=""
      imgList={projects.images.map(imageFormatter)}
      description={
        <DisabledText className="block">{projects.description}</DisabledText>
      }
    />
  );
};
