// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#1f49b6",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f49b6",
      },
      fontFamily: {
        sans: ['cursive'] // هذا سيطبق خط cursive على كل العناصر
      }
    },
  },
  plugins: [],
};