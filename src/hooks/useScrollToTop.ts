import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useScrollToTop = (excludePath = "") => {
  const { pathname } = useLocation();

  const resetScroll = () => {
    if (excludePath && pathname.includes(excludePath)) {
      return;
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  useEffect(() => {
    window.addEventListener("popstate", resetScroll);
    return () => {
      window.removeEventListener("popstate", resetScroll);
    };
  }, []);

  useEffect(resetScroll, [pathname]);
};
