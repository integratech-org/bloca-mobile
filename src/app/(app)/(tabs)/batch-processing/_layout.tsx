import { useStackScreenOptions } from '@/hooks/use-stack-screen-options';
import { Stack } from 'expo-router';

export default function BatchProcessingLayout() {
  const screenOptions = useStackScreenOptions();

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen
        name='index'
        options={{ headerTitle: 'Batch Processing' }}
      />
      <Stack.Screen name='new-batch' options={{ headerTitle: 'New Batch' }} />
      <Stack.Screen
        name='active-tracking'
        options={{ headerTitle: 'Active Tracking' }}
      />
    </Stack>
  );
}
