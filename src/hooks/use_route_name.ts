import { useLocation } from "react-router-dom";
import { ROUTE_NAME } from "@/constants";

export const useRouteName = () => {
  const { pathname } = useLocation();
  return ROUTE_NAME[pathname] || ROUTE_NAME.unknown;
};
