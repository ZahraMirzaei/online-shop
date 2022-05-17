function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(var(${variableName})`;
  };
}

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          primary: withOpacity("--color-primary"),
          secondary: withOpacity("--color-secondary"),
        },
      },
      textColor: {
        palette: {
          base: withOpacity("--color-text-base"),
          mute: withOpacity("--color-text-muted"),
          side: withOpacity("--color-text-side"),
        },
      },
      backgroundColor: {
        palette: {
          fill: withOpacity("--color-bg"),
          card: withOpacity("--color-bg-side"),
        },
      },
    },
  },
  plugins: [],
};
