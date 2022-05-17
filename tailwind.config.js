module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
        },
      },
      textColor: {
        palette: {
          base: "var(--color-text-base)",
          mute: "var(--color-text-muted)",
          side: "var(--color-text-side)",
        },
      },
      backgroundColor: {
        palette: {
          fill: "var(--color-bg)",
          card: "var(--color-bg-side)",
        },
      },
    },
  },
  plugins: [],
};
