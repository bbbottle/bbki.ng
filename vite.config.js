import path from "path";
import { defineConfig } from "vite";
import mdx from "vite-plugin-mdx";
import react from "@vitejs/plugin-react";

const options = {
  // See https://mdxjs.com/advanced/plugins
  remarkPlugins: [
    // E.g. `remark-frontmatter`
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
  plugins: [react(), mdx(options)],
});
