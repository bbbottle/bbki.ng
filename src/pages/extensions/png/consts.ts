import { ImgList } from "@/components";
import { PHOTO_PROJECTS, ROUTES } from "@/constants";

export const ProjectList = PHOTO_PROJECTS.map(
  ({ name, images: imgList, description }) => ({
    path: `${ROUTES.PNG}/${name}`,
    name,
    component: ImgList,
    componentProps: {
      className: "mt-20",
      imgList,
      title: name,
      description,
    },
  })
);
