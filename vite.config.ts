// @lovable.dev/vite-tanstack-config includes the TanStack Start, React,
// Tailwind, tsconfig-paths, Nitro, and sandbox plugins. Do not add them again.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/gv-webpage26/",
    environments: {
      // Publishable static files: HTML, CSS, JavaScript, and public images.
      client: { build: { outDir: ".output/public" } },
      // Build-time renderer only; this directory is not deployed.
      ssr: { build: { outDir: "dist/server" } },
    },
  },
  // No runtime server is needed. TanStack Start prerenders the page below.
  nitro: false,
  tanstackStart: {
    pages: [{ path: "/" }],
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: false,
    },
    server: { entry: "server" },
  },
});
