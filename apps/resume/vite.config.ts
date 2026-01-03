import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const r = (...segments: string[]) => path.resolve(__dirname, ...segments);

export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [r("../../interfaces/web/styles")],
      },
    },
  },

  resolve: {
    alias: {
      "@": r("./src"),
      "@styles": r("../../interfaces/web/styles"),
      "@front": r("../../interfaces/web"),
      "@pkg": r("../../packages")
    },
  },

  optimizeDeps: {
    exclude: [
      "@pkg",
      "@front"
    ],
  },

  define: {
    "process.env": {},
  }
});
