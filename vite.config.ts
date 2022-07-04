import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        // manifest: true,
        rollupOptions: {
            input: {
                app: resolve(__dirname, "popup.html"),
                content: resolve(__dirname, "./src/content.js"),
                background: resolve(__dirname, "./src/background.js"),
            },
            output: {
                entryFileNames: `assets/[name].js`,
            },
            plugins: [
                AutoImport({
                    imports: [
                        {
                            "webextension-polyfill": [["*", "browser"]],
                        },
                    ],
                }),
            ],
        },
    },
    plugins: [react()],
    optimizeDeps: {
        exclude: ["webextension-polyfill"],
    },
});
