/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ["inky"]: {
        1: "#fbfbfb",
        2: "#f7f7f7",
        3: "#f1f1f1",
        4: "#ebebeb",
        5: "#d8d8d8",
        6: "#4e4e4e",
        7: "#616161",
        8: "#75757A",
        9: "#898989",
        10: "#9d9d9d",
        11: "#b0b0b0",
        12: "#c4c4c4",
        dark: "#343434",
        darker: " #2e2e2e",
        darkest: "#292929",
        inky: " #3a3a3a",
      },
      ["blue"]: {
        1: "#EBF5FF",
        2: "#E1EFFE",
        3: "#C3DDFD",
        4: "#A4CAFE",
        5: "#76A9FA",
        6: "#3F83F8",
        7: "#1C64F2",
        8: "#1A56DB",
        9: "#1E429F",
        10: "#233876",
      },
      ["gray"]: {
        0: "#ffffff",
        1: "#D1D5DB",
        2: "#9CA3AF",
        3: "#374151",
        4: "#1f2937",
        5: "#111827",
      },
    },
  },
  plugins: [],
};
