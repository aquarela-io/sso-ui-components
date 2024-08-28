import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "AquarelaSSOUIComponents",
      fileName: () => `index.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "tailwind-merge",
        "lucide-react",
        "tailwindcss-animate",
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({
      include: ["src"],
      exclude: ["src/**/*.stories.tsx", "src/**/*.test.tsx"],
    }),
  ],
});
