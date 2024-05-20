/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-image": "url('/path/to/your/image.jpg')",
        "small-screen": "url('/bg-mobile-light.jpg')",
        "medium-screen": "url('/bg-mobile-dark.jpg')",
        "large-screen": "url('/bg-dektop=light.jpg')",
      }),
    },
    variants: {
      backgroundImage: ["responsive"],
    },
  },
  plugins: [],
};
