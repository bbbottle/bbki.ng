module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx, mdx}",
    "./node_modules/@bbki.ng/components/**/*.js",
  ],
  theme: {
    flex: {
      "almost-half": "0 0 42%",
      half: "0 0 50%",
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            img: {
              marginTop: 0,
              marginBottom: 0,
            },
            a: {
              color: "rgb(37,99,235)",
              textDecoration: "none",
              borderRadius: ".25rem",
              wordBreak: "break-all",
              "&:hover": {
                backgroundColor: "rgb(219,234,254)",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@bbki.ng/design"), require("@tailwindcss/typography")],
};
