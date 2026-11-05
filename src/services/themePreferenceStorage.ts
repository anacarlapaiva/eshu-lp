import AsyncStorage from "@react-native-async-storage/async-storage";

import { themeModeStorageKey } from "@/constants/storage";
import type { ThemeMode } from "@/styles/theme";

const isThemeMode = (value: string | null): value is ThemeMode =>
  value === "dark" || value === "light";

export async function readThemeModePreference(): Promise<ThemeMode | null> {
  const stored = await AsyncStorage.getItem(themeModeStorageKey);
  return isThemeMode(stored) ? stored : null;
}

export async function writeThemeModePreference(mode: ThemeMode): Promise<void> {
  await AsyncStorage.setItem(themeModeStorageKey, mode);
}
