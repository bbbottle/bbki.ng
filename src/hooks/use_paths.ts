import { useLocation } from "react-router-dom";

type pathObj = {
  label: string;
  path?: string;
};

export const usePaths = (): pathObj[] => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return [{ label: "index" }];
  }

  const pathNameArr = pathname.split("/");

  const pathsArr: string[] = pathNameArr.map((p, index) => {
    return pathNameArr
      .slice(0, index + 1)
      .join("/")
      .replace(/^$/, "/");
  });

  return pathsArr.map((path, index) => {
    const isLast = index === pathsArr.length - 1;
    const label = pathNameArr[index].replace(/^$/, "index");
    return isLast
      ? { label }
      : {
          label,
          path,
        };
  });
};
