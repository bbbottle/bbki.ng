import React from "react";
import { useHistory } from "react-router-dom";
import { useHotkeys } from "react-hotkeys-hook";
import { GITHUB_REPO_ADDRESS, ROUTES } from "@/constants";

enum HotKeys {
  i = "i",
  e = "e",
  t = "t",
  p = "p",
  a = "a",
  f = "f",
  b = "b",
  h = "h",
  s = "s",
}

const KEY_ROUTES = [
  { key: HotKeys.i, route: ROUTES.INDEX },
  { key: HotKeys.e, route: ROUTES.EXT },
  { key: HotKeys.t, route: ROUTES.TXT },
  { key: HotKeys.p, route: ROUTES.PNG },
  // { key: HotKeys.a, route: ROUTES.AVI },
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
  useHotkeys(HotKeys.s, () => {
    window.open(GITHUB_REPO_ADDRESS);
  });

  KEY_ROUTES.map(({ key, route }) => {
    useHotkeys(key, () => {
      goto(route);
    });
  });

  return props.children;
};
