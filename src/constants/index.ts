import { createClient } from "@supabase/supabase-js";

export { PHOTO_PROJECTS } from "./photo_projects";
export { VIDEO_LOGS, VIDEO_TAG_ASPECT_RATIO } from "./video_logs";
export { ROUTES, ROUTE_NAME, GITHUB_REPO_ADDRESS } from "./routes";
export const DEFAULT_DELAY = 200;
export const SUPABASE: {
  ANNO: string;
  URL: string;
} = {
  ANNO: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2eHFtdXNmYXh3dXl2eXV1ZWNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ4MjkwNTEsImV4cCI6MTk2MDQwNTA1MX0.lg90OVR7s6tjbDamVaI9FR2M2fc6OVfsfGd4j9MXu3M",
  URL: "https://cvxqmusfaxwuyvyuueco.supabase.co",
};
export const supabase = createClient(SUPABASE.URL, SUPABASE.ANNO);
