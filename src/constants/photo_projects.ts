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
      OSS_PHOTOS.dragonRiver,
      OSS_PHOTOS.riverAndBoats,
      OSS_PHOTOS.riverSide,
      OSS_PHOTOS.quilt,
      OSS_PHOTOS.fishing,
      OSS_PHOTOS.waterLine,
      OSS_PHOTOS.bridge,
      OSS_PHOTOS.building,
    ],
  },
  {
    name: "光前",
    images: [OSS_PHOTOS.oldMan, OSS_PHOTOS.oldWomen, OSS_PHOTOS.littleChild],
  },
  {
    name: "三百零一",
    images: [OSS_PHOTOS.phone, OSS_PHOTOS.chair],
  },
];
