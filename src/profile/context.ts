import { createContext } from "react";
import type { Profile } from "./types";

export const profileContext = createContext<Profile | null>(null);
