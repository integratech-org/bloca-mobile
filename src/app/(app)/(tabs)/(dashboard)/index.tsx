import { Link } from 'expo-router';
import { Button } from 'heroui-native';
import { View } from 'react-native';

export default function DashboardScreen() {
  return (
    <View className='bg-background flex-1'>
      <Link href='/notifications' asChild>
        <Button>Notifications</Button>
      </Link>

      <Link href='/sign-in' asChild>
        <Button>Auth</Button>
      </Link>
    </View>
  );
}
