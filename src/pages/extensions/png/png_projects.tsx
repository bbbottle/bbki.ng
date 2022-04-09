import React, { useContext, useEffect } from "react";
import { MySuspense } from "@/components";
import { useParams } from "react-router-dom";
import { useProjects } from "@/hooks/use_projects";
import { AuthRequired } from "@/auth_required";
import { DropImage, Gallery } from "@bbki.ng/components";
import { useUploader } from "@/hooks/use_uploader";
import { GlobalLoadingContext } from "@/global_loading_state_provider";

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

const ProjectDetail = () => {
  const { id } = useParams();
  const { setIsLoading } = useContext(GlobalLoadingContext);
  const uploader = useUploader();
  const { projects, refresh } = useProjects(id, true);

  useEffect(() => {
    return () => {
      refresh().then(() => {});
    };
  }, []);

  const renderUploader = () => (
    <AuthRequired shouldBeKing>
      <DropImage
        className="mb-256"
        onUploadFinish={async () => {
          setIsLoading(false);
          await refresh();
        }}
        uploader={async (file) => {
          setIsLoading(true);
          try {
            return await uploader(projects.id || "", id || "", file);
          } catch (e) {
            console.error(e, "failed to upload image.");
          }
        }}
        ghost
      >
        {() => null}
      </DropImage>
    </AuthRequired>
  );

  return (
    <Gallery images={projects.images.map(imageFormatter)}>
      {renderUploader()}
    </Gallery>
  );
};

export default () => {
  return (
    <MySuspense>
      <ProjectDetail />
    </MySuspense>
  );
};
