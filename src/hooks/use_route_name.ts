import { ROUTE_NAME } from "@/constants";
import { usePathName } from "@/hooks/use_pathname";

export const useRouteName = () => {
  const pathname = usePathName();
  return ROUTE_NAME[pathname.replace(/\/$/, "")] || ROUTE_NAME.unknown;
};
