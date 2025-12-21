import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// [https://vite.dev/config/](https://vite.dev/config/)
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    // ✅ PERFORMANCE: Code splitting + chunk optimization
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "@mui/material",
            "@mui/icons-material",
          ],
        },
        chunkSizeWarningLimit: 1000, // Allow larger chunks for perf
      },
    },
    // ✅ PERFORMANCE: Inline small assets
    assetsInlineLimit: 4096,
    // ✅ PERFORMANCE: CSS code splitting
    cssCodeSplit: true,
    // ✅ PERFORMANCE: Minify everything
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in prod
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://horoscope-app-api.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/v1"),
      },
      "/api/insertContractDetails": {
        target: "https://asto-om-backend.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
      "/api/insertInquiryDetails": {
        target: "https://asto-om-backend.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
  // ✅ NEW: Image optimization
  assetsInclude: ["**/*.mp4", "**/*.jpg", "**/*.png"],
  // ✅ NEW: Preload scanner
  experimental: {
    renderBuiltUrl: (filename, type) => {
      return type === "asset" ? `/${filename}` : `/${filename}`;
    },
  },
});
