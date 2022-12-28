/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import matchers from "@testing-library/jest-dom/matchers";
// import { expect } from "vitest";

// expect.extend(matchers); // add jest-dom matchers to expect

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        // this is required for the SCSS modules.
        // Remove if ever found to be unnecessary.
        find: /^~(.*)$/,
        replacement: "$1",
      },
    ],
    preserveSymlinks: true,
  },
  build: {
    sourcemap: true,
    outDir: "build",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: ["src/setupTests.js"],
    },
  },
});
