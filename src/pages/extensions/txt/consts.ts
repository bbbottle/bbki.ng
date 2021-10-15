import River from "./articles/river.mdx";
import Letter from "./articles/letter.mdx";
import Shortcuts from "./articles/shortcuts.mdx";

import { compPathObj } from "@/types/path";
import { withCenterWrapper } from "@/components";

export const ArticleList: compPathObj[] = [
  {
    path: "/ext/txt/快捷键",
    name: "快捷键",
    component: withCenterWrapper(Shortcuts),
  },
  {
    path: "/ext/txt/河流纪事",
    name: "河流纪事",
    component: withCenterWrapper(River),
  },
  {
    path: "/ext/txt/信",
    name: "信",
    component: withCenterWrapper(Letter),
  },
];
