import '@/global.css';

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { HeroUINativeProvider } from 'heroui-native';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useOnboardingStore } from '@/features/onboarding/stores/onboarding-store';

export default function RootLayout() {
  const scheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const hasHydrated = useOnboardingStore((s) => s.hasHydrated);
  const hasCompletedOnboarding = useOnboardingStore(
    (s) => s.hasCompletedOnboarding,
  );

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(scheme === 'dark' ? '#1a110c' : '#f9f6f3');
  }, [scheme]);

  if (!fontsLoaded || !hasHydrated) {
    return null; // Or return a loading screen
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider>
        <StatusBar style='auto' />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Protected guard={!hasCompletedOnboarding}>
            <Stack.Screen name='onboarding' />
          </Stack.Protected>

          <Stack.Protected guard={hasCompletedOnboarding}>
            <Stack.Screen name='(auth)' />
            <Stack.Screen name='(app)' />
          </Stack.Protected>
        </Stack>
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
