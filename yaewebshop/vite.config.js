import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Makes built asset paths work inside /[initials]webshop/ folder
  base: "./",
});
