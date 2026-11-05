import { darkColors, lightColors, type ThemeColors } from "./colors";
import { layout, radii } from "./layout";
import { transitions } from "./motion";
import { fonts, fontSizes } from "./typography";

export type ThemeMode = "dark" | "light";

const shared = {
  fonts,
  fontSizes,
  layout,
  radii,
  transitions,
} as const;

export type AppTheme = {
  mode: ThemeMode;
  colors: ThemeColors;
  fonts: typeof fonts;
  fontSizes: typeof fontSizes;
  layout: typeof layout;
  radii: typeof radii;
  transitions: typeof transitions;
  shadows: {
    glow: string;
  };
};

export const darkTheme: AppTheme = {
  ...shared,
  mode: "dark",
  colors: darkColors,
  shadows: {
    glow: darkColors.glow,
  },
};

export const lightTheme: AppTheme = {
  ...shared,
  mode: "light",
  colors: lightColors,
  shadows: {
    glow: lightColors.glow,
  },
};

export const themes = {
  dark: darkTheme,
  light: lightTheme,
} as const satisfies Record<ThemeMode, AppTheme>;

export { easings } from "./motion";
export type { ColorToken, ThemeColors } from "./colors";
