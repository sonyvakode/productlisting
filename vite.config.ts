import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // ensures paths work on Netlify
  build: {
    rollupOptions: {
      // Optional: explicitly externalize entry if needed
      external: ["./src/main.tsx"]
    }
  }
});
