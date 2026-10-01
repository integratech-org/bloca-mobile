import { NativeStackNavigationOptions } from 'expo-router';
import { useCSSVariable } from 'uniwind';

export function useStackScreenOptions(
  overrides?: NativeStackNavigationOptions,
): NativeStackNavigationOptions {
  const [fg, surface] = useCSSVariable([
    '--foreground',
    '--surface',
  ]) as string[];

  return {
    headerStyle: { backgroundColor: surface, ...overrides?.headerStyle },
    headerTintColor: overrides?.headerTintColor ?? fg,
    headerTitleStyle: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
      ...overrides?.headerTitleStyle,
    },
    headerShadowVisible: true,
    headerTitleAlign: 'left',
    ...overrides,
  };
}
