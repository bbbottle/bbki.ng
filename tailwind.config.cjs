module.exports = {
  purge: {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx, mdx}"],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      "almost-half": "0 0 42%",
      half: "0 0 50%",
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
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
    fontFamily: {
      sans: [
        "pt-sans",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
