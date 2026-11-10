import { Screen } from '@/components/screen';
import { ScreenHeading } from '@/components/screen-heading';
import { AuthHeader } from '@/features/auth/components/auth-header';
import { ResetPasswordForm } from '@/features/auth/components/forms/reset-password-form';
import { View } from 'react-native';

export default function ResetPasswordScreen() {
  return (
    <Screen edges={['top', 'bottom']}>
      <View className='flex-1 gap-6 p-4'>
        <AuthHeader />

        <ScreenHeading
          title='New password'
          description="Code verified. Set a new password you haven't used before."
        />

        <ResetPasswordForm />
      </View>
    </Screen>
  );
}
