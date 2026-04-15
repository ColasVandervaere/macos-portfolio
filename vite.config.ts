import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

/** So `/stripe` serves the SPA in dev and `vite preview` (same as production host rewrites). */
function spaFallback(): Plugin {
  return {
    name: "spa-fallback",
    configureServer(server) {
      server.middlewares.use(spaFallbackMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(spaFallbackMiddleware);
    },
  };
}

function spaFallbackMiddleware(
  req: { url?: string },
  _res: unknown,
  next: () => void,
) {
  const raw = req.url ?? "";
  const pathname = raw.split("?")[0] ?? "";

  if (pathname === "/") return next();
  if (pathname.startsWith("/@")) return next();
  if (pathname.startsWith("/node_modules")) return next();
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) return next();

  const query = raw.includes("?") ? "?" + raw.split("?").slice(1).join("?") : "";
  req.url = "/" + query;
  next();
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
});
