import { Screen } from '@/components/screen';
import { Link } from 'expo-router';
import { Button } from 'heroui-native';

export default function DashboardScreen() {
  return (
    <Screen>
      <Link href='/notifications' asChild>
        <Button>Notifications</Button>
      </Link>

      <Link href='/sign-in' asChild>
        <Button>Auth</Button>
      </Link>
    </Screen>
  );
}
