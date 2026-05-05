import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [
      react(),
      compression({
        algorithm: "gzip",
        ext: ".gz",
      }),
      compression({
        algorithm: "brotliCompress",
        ext: ".br",
      }),
      VitePWA({
        injectRegister: null,
        registerType: "autoUpdate",
        workbox: {
          maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webp}"],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/i\.ibb\.co\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "external-images",
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
                },
              },
            },
          ],
        },
        includeAssets: [
          "favicon.ico",
          "favicon-round.png",
          "favicon-192.png",
        ],
        manifest: {
          name: "Terara Printers",
          short_name: "Terara",
          description:
            "Professional printing services in Addis Ababa, Ethiopia",
          theme_color: "#ED1C24",
          background_color: "#ffffff",
          display: "standalone",
          icons: [
            {
              src: "/favicon-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/favicon-round.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            icons: ["lucide-react"],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      cssCodeSplit: true,
      sourcemap: false,
    },
    optimizeDeps: {
      include: ["react", "react-dom", "lucide-react"],
    },
  };
});
