import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { useStackScreenOptions } from '@/hooks/use-stack-screen-options';
import { router, Stack } from 'expo-router';
import { Pressable } from 'react-native';

export default function DashboardLayout() {
  const screenOptions = useStackScreenOptions();

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen
        name='index'
        options={{
          headerTitle: 'Dashboard',
          headerRight: () => (
            <Pressable onPress={() => router.push('/notifications')}>
              <StyledMaterialDesignIcons
                name='bell-outline'
                className='text-foreground'
                size={24}
              />
            </Pressable>
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
