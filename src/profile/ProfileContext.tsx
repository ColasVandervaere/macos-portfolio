import type { ReactNode } from "react";
import { profileContext } from "./context";
import type { Profile } from "./types";

export function ProfileProvider({
  profile,
  children,
}: {
  profile: Profile;
  children: ReactNode;
}) {
  return (
    <profileContext.Provider value={profile}>
      {children}
    </profileContext.Provider>
  );
}
