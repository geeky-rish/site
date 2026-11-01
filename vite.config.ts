// TanStack Start build configuration for RIKA TECH
// Configured with Vite, React, Tailwind CSS, and Nitro.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      routes: ["/"],
    },
  },
});
