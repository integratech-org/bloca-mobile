import { useStackScreenOptions } from '@/hooks/use-stack-screen-options';
import { Stack } from 'expo-router';

export default function ProfileLayout() {
  const screenOptions = useStackScreenOptions();

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name='index' options={{ headerTitle: 'Profile' }} />
    </Stack>
  );
}
