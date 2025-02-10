// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],  // Include your file types here
  theme: {
    extend: {
      colors: {
        primary: "rgb(224, 0, 0)",
        secondary: "#9333EA",
        accent: "#F59E0B",
        dark: "#0F172A",
        light: "#E5E7EB",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(139deg, rgb(32, 161, 64), #6293d5)',
      },
    },
  },
  plugins: [],
}
