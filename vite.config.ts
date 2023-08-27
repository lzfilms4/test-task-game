import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // server: {
  //   host: true,
  //   proxy: {
  //     "/games": {
  //       target: "https://www.freetogame.com/api/",
  //       changeOrigin: true,
  //       secure: true,
  //     },
  //   },
  // },
});
