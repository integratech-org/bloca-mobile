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

export default function RootLayout() {
  const scheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(scheme === 'dark' ? '#1a110c' : '#f9f6f3');
  }, [scheme]);

  if (!fontsLoaded) {
    return null; // Or return a loading screen
  }

  // TODO: Add real auth logic
  const isAuthenticated = false;
  const hasSeenOnboarding = false;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider>
        <StatusBar style='auto' />
        <Stack screenOptions={{ headerShown: false }}>
          {!isAuthenticated && !hasSeenOnboarding ? (
            <Stack.Screen name='(onboarding)' />
          ) : !isAuthenticated ? (
            <Stack.Screen name='(auth)' />
          ) : (
            <Stack.Screen name='(app)' />
          )}
        </Stack>
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
