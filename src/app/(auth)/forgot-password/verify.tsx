import { Link } from 'expo-router';
import { Button } from 'heroui-native';
import { View } from 'react-native';

export default function ForgotPasswordVerifyScreen() {
  // TODO: forgot password verify screen
  return (
    <View>
      <Link href='/sign-in' asChild>
        <Button>Back</Button>
      </Link>
      <Link href='/forgot-password' asChild>
        <Button>Forgot Password</Button>
      </Link>
      <Link href='/forgot-password/reset' asChild>
        <Button>reset</Button>
      </Link>
    </View>
  );
}
