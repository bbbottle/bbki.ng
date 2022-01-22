import React from "react";
import { useNavigate } from "react-router-dom";
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
  T = "shift+t",
}

const KEY_ROUTES = [
  { key: HotKeys.i, route: ROUTES.INDEX },
  { key: HotKeys.e, route: ROUTES.EXT },
  { key: HotKeys.t, route: ROUTES.TXT },
  { key: HotKeys.p, route: ROUTES.PNG },
  // { key: HotKeys.a, route: ROUTES.AVI },
  { key: HotKeys.h, route: ROUTES.HELP },
  { key: HotKeys.T, route: ROUTES.TAGS },
];

export const HotKeyNav = (props: any) => {
  const nav = useNavigate();
  const goto = (path: string) => {
    nav(path);
  };

  useHotkeys(HotKeys.b, () => {
    nav(-1);
  });
  useHotkeys(HotKeys.f, () => {
    nav(1);
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
