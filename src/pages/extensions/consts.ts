import { Avi, Txt } from "../../components";
import { Jpg } from "./jpg";

export const ExtensionsList = [
  {
    path: "/ext/txt",
    ext: ".txt",
    component: Txt,
  },
  {
    path: "/ext/jpg",
    ext: ".jpg",
    component: Jpg,
  },
  {
    path: "/ext/avi",
    ext: ".avi",
    component: Avi,
  },
];
