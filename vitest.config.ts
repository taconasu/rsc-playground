import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    projects: [
      {
        test: {
          name: { label: "unit", color: "blue" },
          environment: "node",
          alias: {
            "@": path.resolve(__dirname, "./src"),
          },
          include: ["./src/**/*.test.ts?(x)"],
        },
      },
    ],
    coverage: {
      provider: "v8",
      include: ["src/**"],
      extension: [".ts"],
    },
  },
});
