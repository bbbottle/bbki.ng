import { Txt } from "./txt";
import { Png } from "./png";
import { Avi } from "./avi";

export const ExtensionsList = [
  {
    path: "/ext/txt",
    name: "txt",
    component: Txt,
  },
  {
    path: "/ext/png",
    name: "png",
    component: Png,
  },
  {
    path: "/ext/avi",
    name: "avi",
    component: Avi,
  },
];
