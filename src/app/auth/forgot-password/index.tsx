import { Screen } from '@/components/screen';
import { ScreenHeading } from '@/components/screen-heading';
import { StyledImage } from '@/components/styled-image';
import { AuthHeader } from '@/features/auth/components/auth-header';
import { ForgotPasswordForm } from '@/features/auth/components/forms/forgot-password-form';
import { router } from 'expo-router';
import { Button } from 'heroui-native';
import { View } from 'react-native';

export default function ForgotPasswordScreen() {
  return (
    <Screen edges={['top', 'bottom']}>
      <View className='flex-1 gap-6 p-4'>
        <AuthHeader />

        <ScreenHeading
          title='Forgot password'
          description="Enter the email your admin registered. We'll send a code to verify it's you."
        />

        <ForgotPasswordForm />

        <StyledImage
          source={require('@/features/auth/assets/holding-phone-illustration.svg')}
          contentFit='contain'
          className='flex-1'
        />

        <Button
          onPress={() => router.push('/auth/forgot-password/verify-otp')}
          className='mt-auto rounded-2xl'
        >
          Send code
        </Button>
      </View>
    </Screen>
  );
}
