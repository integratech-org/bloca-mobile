import { useStackScreenOptions } from '@/hooks/use-stack-screen-options';
import { Stack } from 'expo-router';

export default function HistoryLayout() {
  const screenOptions = useStackScreenOptions();

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name='index' options={{ headerTitle: 'History' }} />
      <Stack.Screen
        name='[id]'
        options={{
          headerTitle: 'Quality Report',
        }}
      />
    </Stack>
  );
}
