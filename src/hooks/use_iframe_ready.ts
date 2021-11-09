import { useEffect, useState } from "react";

export const useIframeReady = (delay: number) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    document.body.addEventListener(
      "load",
      (e) => {
        if (!e.target) {
          return;
        }
        if ((e.target as HTMLElement).tagName !== "IFRAME") {
          return;
        }
        setTimeout(() => {
          setReady(true);
        }, delay);
      },
      /* capture */ true
    );
  }, []);
  return ready;
};
