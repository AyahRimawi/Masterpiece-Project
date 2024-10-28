// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": "http://localhost:8080", // تأكد من تعديل هذا ليناسب عنوان الـ Backend الخاص بك
//     },
//   },
// });

//vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // تأكد من أن هذا هو المنفذ الصحيح لخادم Express الخاص بك
        changeOrigin: true,
        secure: false,
      },
    },
  },
});