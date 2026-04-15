import { useContext } from "react";
import { profileContext } from "./context";

export function useProfile() {
  const ctx = useContext(profileContext);
  if (!ctx) {
    throw new Error("useProfile must be used inside ProfileProvider");
  }
  return ctx;
}
