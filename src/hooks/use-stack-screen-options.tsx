import { NativeStackNavigationOptions, router } from 'expo-router';
import { useCSSVariable } from 'uniwind';
import { Pressable } from 'react-native';
import { CaretLeftIcon } from 'phosphor-react-native/src/icons/CaretLeft';

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
    headerBackVisible: false,
    headerLeft: ({ canGoBack, tintColor }) =>
      canGoBack ? (
        <Pressable
          onPress={() => router.back()}
          hitSlop={16}
          style={{ marginRight: 8 }}
        >
          <CaretLeftIcon size={22} color={tintColor as string} weight='bold' />
        </Pressable>
      ) : null,
    ...overrides,
  };
}
