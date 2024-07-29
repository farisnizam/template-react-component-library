/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
// @ts-ignore
import svgToString from "./svg-to-string";

export default defineConfig({
  resolve: {
    alias: {
      "@less": path.resolve(__dirname, "./src/less"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "svgs": path.resolve(__dirname, "./src/modules/icons/svgs"),
      "patterns": path.resolve(__dirname, "./src/modules/icons/patterns"),
    },
  },
  plugins: [react(), svgToString(), dts({ include: ["src"] })],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        math: "always",
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  optimizeDeps: {
    exclude: ["@storybook/addon-docs"],
  },
});
