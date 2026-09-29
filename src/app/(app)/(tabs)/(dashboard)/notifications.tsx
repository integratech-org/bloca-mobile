import { Link } from 'expo-router';
import { Button } from 'heroui-native';
import { View } from 'react-native';

export default function NotificationsScreen() {
  return (
    <View>
      <Link href='/' asChild>
        <Button>back</Button>
      </Link>
    </View>
  );
}
