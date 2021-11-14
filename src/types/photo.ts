export interface Photo {
  src: string;
  thumbnailSrc?: string;
  renderedWidth?: number;
  width: number;
  height: number;
  avgColor: string;
}

export interface PhotoProject {
  name: string;
  description?: string;
  images: Photo[];
}
