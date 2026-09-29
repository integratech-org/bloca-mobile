import { Link } from 'expo-router';
import { Button } from 'heroui-native';
import { View } from 'react-native';

export default function ForgotPasswordScreen() {
  // TODO: forgot password screen
  return (
    <View>
      <Link href='/sign-in' asChild>
        <Button>Back</Button>
      </Link>
      <Link href='/forgot-password/verify' asChild>
        <Button>verify</Button>
      </Link>
      <Link href='/forgot-password/reset' asChild>
        <Button>reset</Button>
      </Link>
    </View>
  );
}
