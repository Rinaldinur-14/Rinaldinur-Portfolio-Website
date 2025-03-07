import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      external: ['react-router-dom', 'set-cookie-parser', 'turbo-stream'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
  base: "/rinaldinur-portfolio/",
  assetsInclude: ["**/*.JPG"],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});


