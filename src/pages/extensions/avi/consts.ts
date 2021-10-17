import { VideoPlayer, withVideoWrapper } from "@/components";

const component = withVideoWrapper(VideoPlayer);
export const Logs = [
  {
    path: "/ext/avi/2021-09-10",
    name: "2021-09-10",
    component,
    componentProps: {
      src: "https://zjh-im-res.oss-cn-shenzhen.aliyuncs.com/video/2021-09-10",
    },
  },
  {
    path: "/ext/avi/2021-09-18",
    name: "2021-09-18",
    component,
    componentProps: {
      src: "https://zjh-im-res.oss-cn-shenzhen.aliyuncs.com/video/2021-09-18.mov",
    },
  },
  {
    path: "/ext/avi/2021-09-28",
    name: "2021-09-28",
    component,
    componentProps: {
      src: "https://zjh-im-res.oss-cn-shenzhen.aliyuncs.com/video/2021-09-28-4k30H.mov",
    },
  },
];
