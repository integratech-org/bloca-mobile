import { NativeStackNavigationOptions, router } from 'expo-router';
import { useCSSVariable } from 'uniwind';
import { Pressable } from 'react-native';
import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';

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
          hitSlop={12}
          style={{ marginRight: 8 }}
        >
          <StyledMaterialDesignIcons
            name='chevron-left'
            size={28}
            color={tintColor}
          />
        </Pressable>
      ) : null,
    ...overrides,
  };
}
