import type { Profile } from "./types";
import macOsWallpaper from "../assets/macOS_26_Dark.jpg";

export { macOsWallpaper };

/** Bundled macOS wallpaper for `/` (root) and fallbacks. */
export function resolveDesktopBackgroundUrl(profile: Profile): string {
  const raw = profile.desktopBackgroundUrl?.trim();
  if (!raw) {
    return macOsWallpaper;
  }
  if (raw.startsWith("http://") || raw.startsWith("https://")) {
    return raw;
  }
  const base = import.meta.env.BASE_URL;
  const path = raw.startsWith("/") ? raw.slice(1) : raw;
  return `${base}${path}`;
}
