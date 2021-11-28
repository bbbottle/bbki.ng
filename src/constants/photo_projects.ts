import { OSS_PHOTOS } from "@/constants/photos";
import { PhotoProject } from "@/types/photo";

export const PHOTO_PROJECTS: PhotoProject[] = [
  {
    name: "过去的来意",
    description: '"往事越千年 魏武挥鞭 东临碣石有遗篇。"',
    images: [OSS_PHOTOS.quyuan, OSS_PHOTOS.weapons, OSS_PHOTOS.stone],
  },
  {
    name: "敬县城",
    description: '"早秋惊落叶，飘零似客心。翻飞未肯下，犹言忆故林。"',
    images: [
      OSS_PHOTOS.motorcycle,
      OSS_PHOTOS.cycle,
      OSS_PHOTOS.corner,
      OSS_PHOTOS.streetGames,
      OSS_PHOTOS.localDishes,
    ],
  },
  {
    name: "海底的家",
    description:
      '"河流用一生梳理 \\ 地球的表情 \\ 沿岸收集人類的喜怒哀樂 \\ 檔案堆滿了海底的家"',
    images: [
      OSS_PHOTOS.shopping,
      OSS_PHOTOS.chess,
      OSS_PHOTOS.player,
      // OSS_PHOTOS.swimmer,
      OSS_PHOTOS.players,
      // OSS_PHOTOS.dragonRiver,
      // OSS_PHOTOS.riverAndBoats,
      OSS_PHOTOS.riverSide,
      OSS_PHOTOS.quilt,
      // OSS_PHOTOS.fishing,
      OSS_PHOTOS.waterLine,
      OSS_PHOTOS.bridge,
      OSS_PHOTOS.building,
      OSS_PHOTOS.smoking,
      // OSS_PHOTOS.jzBridge,
    ],
  },
  {
    name: "光前",
    description: "城中村，个人深圳经历出入口。",
    images: [OSS_PHOTOS.oldMan, OSS_PHOTOS.oldWomen, OSS_PHOTOS.littleChild],
  },
  {
    name: "三百零一",
    description: "陋室光影",
    images: [OSS_PHOTOS.phone, OSS_PHOTOS.chair],
  },
];
