import { useLocation } from "react-router-dom";

export const usePathName = () => {
  const { pathname } = useLocation();
  return pathname.replace(/\/$/, "");
};
