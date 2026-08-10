import { Stack } from 'expo-router';

export default function ProcessingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // outer Tabs header will handle it instead
      }}
    />
  );
}
