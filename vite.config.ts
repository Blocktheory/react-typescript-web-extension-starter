import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // manifest: true,
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'popup.html'),
        content:  resolve(__dirname, "./src/content.js"),
        background: resolve(__dirname, "./src/background.js"),
      },
      output: {
        entryFileNames: `assets/[name].js`
      },
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        // rollupNodePolyFill()
      ]
    },
  },
  plugins: [react()]
});
