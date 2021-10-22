import { compPathObj } from "@/types/path";
import { withArticleWrapper } from "@/components";
import River from "@/articles/river.mdx";
import Letter from "@/articles/letter.mdx";
import Shortcuts from "@/articles/shortcuts.mdx";
import Travel from "@/articles/travel.mdx";
import CoolDown from "@/articles/cooldown.mdx";
import Move from "@/articles/move.mdx";

export const ArticleList: compPathObj[] = [
  {
    path: "/ext/txt/快捷键",
    name: "快捷键",
    component: withArticleWrapper(Shortcuts),
  },
  {
    path: "/ext/txt/河流纪事",
    name: "河流纪事",
    component: withArticleWrapper(River),
  },
  {
    path: "/ext/txt/信",
    name: "信",
    component: withArticleWrapper(Letter),
  },
  {
    path: "/ext/txt/离开",
    name: "离开",
    component: withArticleWrapper(Travel),
  },
  {
    path: "/ext/txt/降温",
    name: "降温",
    component: withArticleWrapper(CoolDown),
  },
  {
    path: "/ext/txt/古老的小区",
    name: "古老的小区",
    component: withArticleWrapper(Move),
  },
];
