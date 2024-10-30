import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { resolve } from "path";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), TanStackRouterVite(), viteTsconfigPaths()],

  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
    },
  },
});
