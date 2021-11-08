import { usePathName } from "@/hooks/use_pathname";
import { CUSDIS_ATTRS } from "@/constants/cusdis";

export const useCusdisAttr = (title: string) => {
  const pathname = usePathName();
  return Object.assign({}, CUSDIS_ATTRS, {
    pageTitle: title,
    pageUrl: pathname,
    pageId: pathname,
  });
};
