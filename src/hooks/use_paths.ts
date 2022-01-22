import { pathObj } from "@/types/path";
import { usePathName } from "@/hooks/use_pathname";

export const usePaths = (): pathObj[] => {
  const pathname = usePathName();

  if (pathname === "/") {
    return [{ name: "~" }];
  }

  const pathNameArr = pathname.split("/");

  const pathsArr: string[] = pathNameArr.map((p: string, index: number) => {
    return pathNameArr
      .slice(0, index + 1)
      .join("/")
      .replace(/^$/, "/");
  });

  return pathsArr.map((path, index) => {
    const isLast = index === pathsArr.length - 1;
    const name = decodeURIComponent(pathNameArr[index].replace(/^$/, "~"));
    return isLast
      ? { name }
      : {
          name,
          path,
        };
  });
};
