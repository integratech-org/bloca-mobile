import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { useStackScreenOptions } from '@/hooks/use-stack-screen-options';
import { router, Stack } from 'expo-router';
import { Button } from 'heroui-native';

export default function DashboardLayout() {
  const screenOptions = useStackScreenOptions();

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen
        name='index'
        options={{
          headerTitle: 'Dashboard',
          headerRight: () => (
            <Button
              isIconOnly
              variant='outline'
              size='sm'
              onPress={() => router.push('/notifications')}
            >
              <StyledMaterialDesignIcons
                name='bell-outline'
                className='text-foreground'
                size={20}
              />
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
