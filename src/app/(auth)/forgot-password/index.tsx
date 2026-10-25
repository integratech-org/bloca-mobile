import { Screen } from '@/components/screen';
import { AuthHeader } from '@/features/auth/components/auth-header';
import { ForgotPasswordForm } from '@/features/auth/components/forms/forgot-password-form';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Button, Typography } from 'heroui-native';
import { View } from 'react-native';

export default function ForgotPasswordScreen() {
  return (
    <Screen edges={['bottom']}>
      <View className='flex-1 p-4'>
        <AuthHeader />

        {/* Title and Subheading*/}
        <View className='mb-6 flex-1'>
          <Typography.Heading>Forgot Password</Typography.Heading>

          <Typography.Paragraph>
            Enter the email your admin registered. We&apos;ll send a code to
            verify verify it&apos;s you.
          </Typography.Paragraph>
        </View>

        {/* Forgot Password Form */}
        <ForgotPasswordForm />

        {/* Illustration Placehoder  */}
        <View className='mt-8 items-center justify-center'>
          <Image
            source={require('@/features/auth/assets/holding-phone-illustration.svg')}
            style={{ width: 220, height: 220 }}
            contentFit='contain'
          />
        </View>

        {/* Fixed button section at bottom */}
        <View>
          <Button onPress={() => router.push('/forgot-password/verify')}>
            Send Code
          </Button>
        </View>
      </View>
    </Screen>
  );
}
