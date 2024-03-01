/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(155.28deg, #383638 2.06%, #0B0B0B 33.08%)",
      },
      colors: {
        "custom-gray": "#8B8E99",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [import("flowbite/plugin")],
};
