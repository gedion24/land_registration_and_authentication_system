/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   "bg-pattern":
      // },
      backgroundImage: {
        "hero-pattern":
          " url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
        wellcomeimg: "url('./assets/meeting.avif')",
      },
    },
  },
  plugins: [],
};
