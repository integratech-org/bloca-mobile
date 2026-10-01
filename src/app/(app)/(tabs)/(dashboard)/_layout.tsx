import { useStackScreenOptions } from '@/hooks/use-stack-screen-options';
import { Stack } from 'expo-router';

export default function DashboardLayout() {
  const screenOptions = useStackScreenOptions();

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name='index' options={{ headerTitle: 'Dashboard' }} />
      <Stack.Screen
        name='notifications'
        options={{ headerTitle: 'Notifications' }}
      />
    </Stack>
  );
}
