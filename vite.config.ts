import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Externalize the main entry if needed
      external: ["/src/main.tsx"]
    }
  }
});
