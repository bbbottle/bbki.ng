import { buildSimpleApiHooks } from "@/utils";
import { API } from "@/constants/routes";

export { usePaths } from "./use_paths";
export { useRouteName } from "./use_route_name";
export { useImgLoading } from "./use_img_loading";

export {
  useVideoControls,
  useVideoProgress,
  useVideoEleHeight,
} from "./use_video_controls";

export const useMovies = buildSimpleApiHooks(API.MOVIES, "movies");
export const useBooks = buildSimpleApiHooks(API.BOOKS, "books");
