import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { builderDevTools } from "@builder.io/dev-tools/vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { resolve } from "path";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), TanStackRouterVite(), builderDevTools()],

  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
    },
  },
});
