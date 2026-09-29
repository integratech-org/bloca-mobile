import { Link } from 'expo-router';
import { Button } from 'heroui-native';
import { View } from 'react-native';

export default function SignInScreen() {
  // TODO: sign in screen
  return (
    <View>
      <Link href='/forgot-password' asChild>
        <Button>Forgot Password</Button>
      </Link>

      <Link href='/' asChild>
        <Button>Back</Button>
      </Link>
    </View>
  );
}
