import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  const resetScroll = () => {
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
