import type { Profile } from "./types";

export async function loadProfile(slug: string | undefined): Promise<Profile> {
  const id = slug && slug.length > 0 ? slug : "default";
  const res = await fetch(`${import.meta.env.BASE_URL}profiles/${id}.json`);
  if (!res.ok) {
    throw new Error(`Profile "${id}" not found`);
  }
  return res.json() as Promise<Profile>;
}
