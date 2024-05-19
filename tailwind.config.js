/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-login": "url('/images/login.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
