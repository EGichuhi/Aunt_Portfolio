
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use './' for relative paths in GitHub Pages
  base: './',
  build: {
    // Output directory - matches the directory in GitHub workflow
    outDir: 'dist',
    // Enable source maps for better debugging
    sourcemap: true,
    // Ensure assets use relative paths
    assetsDir: 'assets',
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
