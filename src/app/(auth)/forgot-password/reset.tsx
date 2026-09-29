import { Link } from 'expo-router';
import { Button } from 'heroui-native';
import { View } from 'react-native';

export default function ForgotPasswordResetScreen() {
  // TODO: forgot password reset screen
  return (
    <View>
      <Link href='/sign-in' asChild>
        <Button>Back</Button>
      </Link>
      <Link href='/forgot-password' asChild>
        <Button>Forgot Password</Button>
      </Link>
      <Link href='/forgot-password/verify' asChild>
        <Button>verify</Button>
      </Link>
    </View>
  );
}
