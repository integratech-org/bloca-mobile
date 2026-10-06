import { useStackScreenOptions } from '@/hooks/use-stack-screen-options';
import { Stack } from 'expo-router';

export default function ProfileLayout() {
  const screenOptions = useStackScreenOptions();

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name='index' options={{ headerTitle: 'Profile' }} />
      <Stack.Screen
        name='change-email'
        options={{ headerTitle: 'Change Email' }}
      />
      <Stack.Screen
        name='change-contact'
        options={{ headerTitle: 'Change Contact' }}
      />
      <Stack.Screen
        name='edit-address'
        options={{ headerTitle: 'Edit Address' }}
      />
      <Stack.Screen
        name='change-password'
        options={{ headerTitle: 'Change Password' }}
      />
      <Stack.Screen name='theme' options={{ headerTitle: 'Theme' }} />
    </Stack>
  );
}
