import { ossProcessType } from "@/types/oss";

export interface Photo {
  src: string;
  width: number;
  height: number;
  processType?: ossProcessType;
  avgColor?: string;
  thumbnailSrc?: string;
  renderedWidth?: number;
}

export interface PhotoProject {
  name: string;
  description?: string;
  images: Photo[];
}
