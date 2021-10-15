import { useLocation } from "react-router-dom";

export const usePaths = (): pathObj[] => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return [{ name: "index" }];
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
    const name = pathNameArr[index].replace(/^$/, "index");
    return isLast
      ? { name }
      : {
          name,
          path,
        };
  });
};
