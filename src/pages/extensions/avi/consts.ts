import { VideoPlayer, withVideoWrapper } from "@/components";
import { ROUTES, VIDEO_LOGS } from "@/constants";

const component = withVideoWrapper(VideoPlayer);
export const Logs = VIDEO_LOGS.map(({ name, src }) => ({
  path: `${ROUTES.AVI}/${name}`,
  name,
  component,
  componentProps: { src },
}));
