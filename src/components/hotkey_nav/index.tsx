import React from "react";
import { useHistory } from "react-router-dom";
import { useHotkeys } from "react-hotkeys-hook";
import { ROUTES } from "@/constants";

enum HotKeys {
  i = "i",
  e = "e",
  t = "t",
  p = "p",
  a = "a",
  f = "f",
  b = "b",
  h = "h",
}

const KEY_ROUTES = [
  { key: HotKeys.i, route: ROUTES.INDEX },
  { key: HotKeys.e, route: ROUTES.EXT },
  { key: HotKeys.t, route: ROUTES.TXT },
  { key: HotKeys.p, route: ROUTES.PNG },
  { key: HotKeys.a, route: ROUTES.AVI },
  { key: HotKeys.h, route: ROUTES.HELP },
];

export const HotKeyNav = (props: any) => {
  const history = useHistory();
  const goto = (path: string) => {
    history.push(path);
  };

  useHotkeys(HotKeys.b, () => {
    history.goBack();
  });
  useHotkeys(HotKeys.f, () => {
    history.goForward();
  });

  KEY_ROUTES.map(({ key, route }) => {
    useHotkeys(key, () => {
      goto(route);
    });
  });

  return props.children;
};
