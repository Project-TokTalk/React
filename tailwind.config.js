const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js, jsx,ts,tsx}", "./src/**/**/*.{js, jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        transparent: colors.transparent,
        top_color: "#002267",
        chat_a: "#6981BD",
        chat_b: "#D9D9D9",
        white: colors.white,
        red: colors.red,
        blue: colors.blue,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
