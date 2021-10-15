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
  plugins: [react(), mdx(options)],
});
