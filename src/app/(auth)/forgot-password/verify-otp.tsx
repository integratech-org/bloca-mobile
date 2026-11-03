import { Screen } from '@/components/screen';
import { ScreenHeading } from '@/components/screen-heading';
import { AuthHeader } from '@/features/auth/components/auth-header';
import { VerifyOtpForm } from '@/features/auth/components/forms/verify-otp-form';
import { View } from 'react-native';

export default function VerifyOtpScreen() {
  return (
    <Screen edges={['top', 'bottom']}>
      <View className='flex-1 gap-6 p-4'>
        <AuthHeader />

        <ScreenHeading
          title='Enter the code'
          description='We sent a 6-digit code to o***d@bloca.ph.'
        />

        <VerifyOtpForm />
      </View>
    </Screen>
  );
}
