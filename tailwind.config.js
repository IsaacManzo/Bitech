const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'custom-azul': '#0E70C3',
         'custom-gris': '#4C4C4C',
      },
      fontFamily: {
        monospace: ['"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
