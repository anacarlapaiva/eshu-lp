import { MoonStar, Sun } from "lucide-react";

import { useThemeMode } from "@/hooks";

import { Toggle } from "./styles";

export function ThemeToggle() {
  const { isDark, toggleMode } = useThemeMode();

  return (
    <Toggle
      type="button"
      onClick={toggleMode}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <Sun aria-hidden /> : <MoonStar aria-hidden />}
    </Toggle>
  );
}
