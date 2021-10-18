import path from "path";
import { defineConfig } from "vite";
import mdx from "vite-plugin-mdx";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import react from "@vitejs/plugin-react";

const options = {
  // See https://mdxjs.com/advanced/plugins
  remarkPlugins: [
    // E.g. `remark-frontmatter`
    remarkParse,
    remarkGfm,
  ],
  rehypePlugins: [],
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), (mdx as any).default(options)],
});
