module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        white_A700_b2: "#ffffffb2",
        blue_A700: "#2761ff",
        green_901: "#028e08",
        deep_purple_400: "#7958d7",
        green_900: "#028e07",
        indigo_A100: "#96a3fe",
        indigo_A100_54: "#9cb2ff54",
        gray_50: "#f9faff",
        light_blue_800: "#0078ad",
        black_900_dd: "#000000dd",
        indigo_200_19: "#9aa8ec19",
        black_900: "#000000",
        yellow_900: "#fc7717",
        white_A700_19: "#ffffff19",
        deep_purple_A700: "#5020d7",
        teal_A700: "#00ada2",
        gray_600: "#6b6b6b",
        teal_A701: "#00ada3",
        gray_901: "#282828",
        blue_800: "#1540d8",
        gray_900_dd: "#191919dd",
        gray_800: "#454040",
        gray_900: "#141414",
        bluegray_100: "#d3cfcf",
        gray_300: "#e1e1e1",
        bluegray_900_93: "#2d2d2d93",
        blue_50: "#eef1ff",
        black_900_99: "#00000099",
        black_900_11: "#00000011",
        indigo_A700: "#0042fc",
        indigo_200_3f: "#9ba8ed3f",
        bluegray_900_19: "#2b2b2b19",
        white_A700: "#ffffff",
        gray_300_b2: "#dde2edb2",
      },
      borderRadius: {
        radius2: "2px",
        radius3: "3px",
        radius5: "5px",
        radius10: "10px",
        radius12: "12px",
        radius50: "50%",
      },
      fontFamily: {
        circularstd: "Circular Std",
        roboto: "Roboto",
        inter: "Inter",
      },
      letterSpacing: { ls1: "1px", ls05: "0.5px", ls025: "0.25px" },
      boxShadow: {
        bs: "0px 4px  4px 0px #9ba8ed3f",
        bs2: "0px 4px  4px 0px #9cb2ff54",
        bs1: "0px 4px  4px 0px #9aa8ec19",
        bs3: "-4px -4px  35px 0px #00000011",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
