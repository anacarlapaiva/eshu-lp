type ColorPalette = {
  background: string;
  foreground: string;
  card: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  gold: string;
  goldDeep: string;
  emberDeep: string;
  white: string;
  overlayStrong: string;
  overlaySoft: string;
  overlayFaint: string;
  controlBg: string;
  controlBgHover: string;
  controlBorder: string;
  track: string;
  goldGradient: string;
  emberGradient: string;
  primarySoft: string;
  primaryMuted: string;
  primaryGhost: string;
  primarySoftText: string;
  cardGlass: string;
  heroScrim: string;
  heroScrimY: string;
  offerScrim: string;
  glow: string;
};

export const darkColors: ColorPalette = {
  background: "#090504",
  foreground: "#f2eadd",
  card: "#130b09",
  primary: "#d01d21",
  primaryForeground: "#fcf8f1",
  secondary: "#1e1311",
  muted: "#1e1311",
  mutedForeground: "#b1a291",
  accent: "#e3ad4b",
  accentForeground: "#0d0807",
  border: "rgba(227, 173, 75, 0.18)",
  gold: "#f2c86c",
  goldDeep: "#d98a2e",
  emberDeep: "#940015",
  white: "#ffffff",
  overlayStrong: "rgba(9, 5, 4, 0.78)",
  overlaySoft: "rgba(9, 5, 4, 0.4)",
  overlayFaint: "rgba(9, 5, 4, 0.12)",
  controlBg: "rgba(9, 5, 4, 0.35)",
  controlBgHover: "rgba(9, 5, 4, 0.55)",
  controlBorder: "rgba(242, 234, 221, 0.35)",
  track: "rgba(242, 234, 221, 0.25)",
  goldGradient: "linear-gradient(90deg, #f2c86c, #d98a2e)",
  emberGradient: "linear-gradient(135deg, #d01d21, #940015)",
  primarySoft: "rgba(208, 29, 33, 0.15)",
  primaryMuted: "rgba(208, 29, 33, 0.4)",
  primaryGhost: "rgba(208, 29, 33, 0.1)",
  primarySoftText: "rgba(208, 29, 33, 0.7)",
  cardGlass: "rgba(19, 11, 9, 0.82)",
  heroScrim: "linear-gradient(to right, #090504 0%, rgba(9, 5, 4, 0.72) 50%, rgba(9, 5, 4, 0.12) 100%)",
  heroScrimY: "linear-gradient(to top, #090504 0%, transparent 50%, rgba(9, 5, 4, 0.4) 100%)",
  offerScrim: "linear-gradient(#090504, rgba(9, 5, 4, 0.82) 50%, #090504)",
  glow: "0 0 60px -10px rgba(208, 29, 33, 0.55)",
};

/** Warm parchment light theme: keeps ember/gold identity with readable contrast. */
export const lightColors: ColorPalette = {
  background: "#f4ebe0",
  foreground: "#1c130f",
  card: "#fff8ef",
  primary: "#b9161a",
  primaryForeground: "#fff8ef",
  secondary: "#ebe0d2",
  muted: "#ebe0d2",
  mutedForeground: "#6d5a4c",
  accent: "#9a6f1d",
  accentForeground: "#fff8ef",
  border: "rgba(154, 111, 29, 0.24)",
  gold: "#b8892a",
  goldDeep: "#8a6418",
  emberDeep: "#8a1014",
  white: "#ffffff",
  overlayStrong: "rgba(244, 235, 224, 0.88)",
  overlaySoft: "rgba(244, 235, 224, 0.55)",
  overlayFaint: "rgba(244, 235, 224, 0.18)",
  controlBg: "rgba(255, 248, 239, 0.72)",
  controlBgHover: "rgba(255, 248, 239, 0.92)",
  controlBorder: "rgba(28, 19, 15, 0.2)",
  track: "rgba(28, 19, 15, 0.18)",
  goldGradient: "linear-gradient(90deg, #c9952f, #8a6418)",
  emberGradient: "linear-gradient(135deg, #b9161a, #8a1014)",
  primarySoft: "rgba(185, 22, 26, 0.1)",
  primaryMuted: "rgba(185, 22, 26, 0.28)",
  primaryGhost: "rgba(185, 22, 26, 0.08)",
  primarySoftText: "rgba(185, 22, 26, 0.72)",
  cardGlass: "rgba(255, 248, 239, 0.88)",
  heroScrim: "linear-gradient(to right, #f4ebe0 0%, rgba(244, 235, 224, 0.82) 48%, rgba(244, 235, 224, 0.18) 100%)",
  heroScrimY: "linear-gradient(to top, #f4ebe0 0%, transparent 52%, rgba(244, 235, 224, 0.45) 100%)",
  offerScrim: "linear-gradient(#f4ebe0, rgba(244, 235, 224, 0.88) 50%, #f4ebe0)",
  glow: "0 0 50px -12px rgba(185, 22, 26, 0.35)",
};

export type ColorToken = keyof ColorPalette;
export type ThemeColors = ColorPalette;
