import { defineConfig, type UserConfigFn } from "vite";
import react from "@vitejs/plugin-react";

declare const process: any;

const config: UserConfigFn = function() {
  return {
    plugins: [react()],
    clearScreen: false,
    server: {
      port: 1420,
      strictPort: true,
    },
    envPrefix: ["VITE_", "TAURI_"],
    build: {
      target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
      minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
      sourcemap: !!process.env.TAURI_DEBUG,
    },
  }
}

export default defineConfig(config);
