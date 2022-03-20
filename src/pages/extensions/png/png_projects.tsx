import React, { useEffect, useState } from "react";
import { DisabledText, ImgList } from "@/components";
import { useParams } from "react-router-dom";
import { useProjects } from "@/hooks/use_projects";
import { AuthRequired } from "@/auth_required";
import { DropImage, BlinkDot, ArticleSkeleton } from "@bbki.ng/components";
import { useUploader } from "@/hooks/use_uploader";

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
  const uploader = useUploader();
  const { projects, isError, isLoading, addLocalPhotoImmediately, refresh } =
    useProjects(id);

  useEffect(() => {
    return () => {
      refresh().then(() => {});
    };
  }, []);

  if (isError) {
    return null;
  }

  if (isLoading) {
    return (
      <ArticleSkeleton titleLength={id?.length || 0} descriptionLength={8} />
    );
  }

  const renderUploader = () => (
    <AuthRequired shouldBeKing>
      <DropImage
        className="mb-256"
        onUploadFinish={async (photo) => {
          addLocalPhotoImmediately(photo);
          setUploading(false);
          await refresh();
        }}
        uploader={async (file) => {
          setUploading(true);
          try {
            return await uploader(projects.id || "", id || "", file);
          } catch (e) {
            console.error(e, "failed to upload image.");
          }
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
