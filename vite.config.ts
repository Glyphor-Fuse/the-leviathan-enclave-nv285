import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ command }) => {
  const plugins: PluginOption[] = [react(), tailwindcss()];

  // glyphor-tagger is a dev-only authoring plugin and must not block prod builds.
  if (command === "serve") {
    try {
      const { componentTagger } = await import("glyphor-tagger");
      plugins.push(componentTagger() as PluginOption);
    } catch (error) {
      console.warn("[vite] glyphor-tagger unavailable in serve mode:", error);
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
