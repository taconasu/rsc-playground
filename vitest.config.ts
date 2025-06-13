import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "node",
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    include: ["./src/**/*.test.ts?(x)"],
    projects: [
      {
        test: {
          name: {
            label: "unit",
            color: "red",
          },
        },
      },
    ],
  },
});
