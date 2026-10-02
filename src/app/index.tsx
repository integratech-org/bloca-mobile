import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect to auth since welcome is not ready yet
  return <Redirect href='/(onboarding)/welcome' />;
}
