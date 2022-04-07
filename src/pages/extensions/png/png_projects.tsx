import React, { useContext, useEffect, useState } from "react";
import classnames from "classnames";
import { Img, MySuspense, RandomRowsLayout } from "@/components";
import { useParams } from "react-router-dom";
import { useProjects } from "@/hooks/use_projects";
import { AuthRequired } from "@/auth_required";
import { DropImage } from "@bbki.ng/components";
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

  const renderImage = (index: number, isLargeImage: boolean, col: number) => {
    const image: any = projects.images[index];
    if (!image) {
      return null;
    }

    const img = imageFormatter(image);

    return (
      <div
        className={classnames("mb-256", {
          "md:mr-64": col === 0,
          "md:ml-64": col !== 0,
        })}
      >
        <Img {...img} size={isLargeImage ? "large" : "normal"} />
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center">
      <RandomRowsLayout
        classNames="mx-32 mt-128 max-w-screen-xl"
        cellsCount={projects.images.length}
        cellRenderer={renderImage}
      />
      {renderUploader()}
    </div>
  );
};

export default () => {
  return (
    <MySuspense>
      <ProjectDetail />
    </MySuspense>
  );
};
