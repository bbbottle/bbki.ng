import { Txt } from "./txt";
import { Jpg } from "./jpg";
import { Avi } from "./avi";

export const ExtensionsList = [
  {
    path: "/ext/txt",
    name: ".txt",
    component: Txt,
  },
  {
    path: "/ext/jpg",
    name: ".jpg",
    component: Jpg,
  },
  {
    path: "/ext/avi",
    name: ".avi",
    component: Avi,
  },
];
