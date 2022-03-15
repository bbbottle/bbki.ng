export enum ossProcessType {
  THUMBNAIL = "thumbnail",
  WEBP = "webp",
  NULL = "null",
  oWEBP = "owebp",
  PROG = "prog",
}

export interface UploadResult {
  name: string;
  res: {
    status: number;
  };
  url: string;
}
