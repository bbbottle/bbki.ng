import { OSS_PHOTOS } from "@/constants/photos";
import { PhotoProject } from "@/types/photo";

export const PHOTO_PROJECTS: PhotoProject[] = [
  {
    name: "敬县城",
    images: [
      OSS_PHOTOS.motorcycle,
      OSS_PHOTOS.cycle,
      OSS_PHOTOS.corner,
      OSS_PHOTOS.streetGames,
      OSS_PHOTOS.localDishes,
    ],
  },
  {
    name: "河东河西",
    images: [
      OSS_PHOTOS.fishing,
      OSS_PHOTOS.waterLine,
      OSS_PHOTOS.bridge,
      OSS_PHOTOS.building,
      OSS_PHOTOS.chair,
    ],
  },
  {
    name: "光前村",
    images: [OSS_PHOTOS.oldMan, OSS_PHOTOS.oldWomen, OSS_PHOTOS.littleChild],
  },
];
