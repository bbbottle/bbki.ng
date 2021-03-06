import React, { useContext, useEffect } from "react";
import { MySuspense } from "@/components";
import { useParams } from "react-router-dom";
import { useProjects } from "@/hooks/use_projects";
import { AuthRequired } from "@/auth_required";
import { imageFormatter } from "@/utils";
import { DropImage, Gallery, Nav } from "@bbki.ng/components";
import { useUploader } from "@/hooks/use_uploader";
import { GlobalLoadingContext } from "@/global_loading_state_provider";
import { usePaths } from "@/hooks";

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
    <>
      <Gallery images={projects.images.map(imageFormatter)}>
        {renderUploader()}
      </Gallery>
      <Nav paths={usePaths()} mini className="justify-center py-32 md:hidden" />
    </>
  );
};

export default () => {
  return (
    <MySuspense>
      <ProjectDetail />
    </MySuspense>
  );
};
