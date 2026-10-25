import { Screen } from '@/components/screen';
import { AuthHeader } from '@/features/auth/components/auth-header';
import { ResetForm } from '@/features/auth/components/forms/reset-form';
import { Button, Typography } from 'heroui-native';
import { View } from 'react-native';
export default function ForgotPasswordResetScreen() {
  // TODO: forgot password reset screen
  return (
    <Screen edges={['bottom']}>
      <View className='flex-1'>
        <View className='flex-1 p-4'>
          <AuthHeader />

          {/* Title and Subheading*/}
          <View className='mb-6'>
            <Typography.Heading>New Password</Typography.Heading>

            <Typography type='body'>
              Code verified. Set a new password you haven&apos;t used before.
            </Typography>
          </View>

          {/* Reset Form */}
          <View className='gap-4'>
            <ResetForm />
          </View>
        </View>

        {/* Fixed button section at bottom */}
        <View className='px-4 pb-4'>
          <Button>Reset Password</Button>
        </View>
      </View>
    </Screen>
  );
}
