const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js, jsx,ts,tsx}", "./src/**/**/*.{js, jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: colors.transparent,
        top_color: "#002267",
        chat_a: "#6981BD",
        bg_color: "#ECF2F6",
        color_a: "#7589F3",
        color_b: "#002267",
        color_c: "#4D8FD3",
        color_d: "#5c76ff",
        white: colors.white,
        red: colors.red,
        blue: colors.blue,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
