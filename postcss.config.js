module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        content: [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
        ],
        defaultExtractor: (content) => content.match(/[A-Za-Z0-9-_:/]+/g) || [],
      }),
  ],
};

// const purgecss = require("@fullhuman/postcss-purgecss");
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     purgecss: purgecss({
//       content: [
//         "./pages/**/*.{js,ts,jsx,tsx}",
//         "./components/**/*.{js,ts,jsx,tsx}",
//       ],
//     }),
//   },
// };
