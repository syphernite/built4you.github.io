import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/beachbumz/",
  plugins: [react()],
  build: { outDir: "dist", emptyOutDir: true },
});
