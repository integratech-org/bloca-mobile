import { Stack } from 'expo-router';

export const unstable_settings = {
  anchor: 'index',
};

export default function ForgotPasswordLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='verify' />
      <Stack.Screen name='reset' />
    </Stack>
  );
}
