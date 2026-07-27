import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 12, padding: 20 }}>
      <Text className='text-red-500'>
        This is a viewing index for viewing the main screen. this is a temporary
        screen for testing the navigation between login, signup, and forgot
        password screens. You can edit this screen to add your own content and
        functionality.
      </Text>
      <Link href='/login'>
        <Text>Go to Login</Text>
      </Link>
      <Link href='/signup'>
        <Text>Go to Signup</Text>
      </Link>
      <Link href='/forgotpassword'>
        <Text>Go to Forgot Password</Text>
      </Link>
    </View>
  );
}
