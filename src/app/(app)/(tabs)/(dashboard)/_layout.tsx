import { useStackScreenOptions } from '@/hooks/use-stack-screen-options';
import { router, Stack } from 'expo-router';
import { Button } from 'heroui-native';
import { BellIcon } from 'phosphor-react-native/src/icons/Bell';
import { useCSSVariable } from 'uniwind';

export default function DashboardLayout() {
  const [fg] = useCSSVariable(['--color-foreground']) as string[];
  const screenOptions = useStackScreenOptions();

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen
        name='index'
        options={{
          headerTitle: 'Dashboard',
          headerLeft: () => null,
          headerRight: () => (
            <Button
              isIconOnly
              variant='outline'
              size='sm'
              onPress={() => router.push('/notifications')}
            >
              <BellIcon size={20} color={fg} />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name='notifications'
        options={{ headerTitle: 'Notifications' }}
      />
    </Stack>
  );
}
