import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    // react-snap (postbuild prerender) runs a very old bundled Chromium that
    // cannot parse ES2020 syntax (optional chaining `?.`, nullish coalescing
    // `??`). Target ES2019 so those are transpiled away and prerendering works.
    // Every browser we actually support handles ES2019 natively.
    target: "es2019",
  },
});
