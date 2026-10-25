import { Screen } from '@/components/screen';
import { AuthHeader } from '@/features/auth/components/auth-header';
import { ResetForm } from '@/features/auth/components/forms/reset-form';
import { Button, Typography } from 'heroui-native';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default function ForgotPasswordResetScreen() {
  // TODO: forgot password reset screen
  return (
    <Screen edges={['bottom']}>
      <View className='bg-background flex-1'>
        {/* Scrollable content area */}
        <ScrollView
          className='flex-1'
          contentContainerClassName='p-4'
          showsVerticalScrollIndicator={false}
        >
          <AuthHeader />

          {/* Title and Subheading*/}
          <View className='mb-6'>
            <Typography.Heading>Set a new password</Typography.Heading>

            <Typography type='body'>
              Code verified. Choose a password you haven&apos;t used before.
            </Typography>
          </View>

          {/* Reset Form */}
          <View className='gap-4'>
            <ResetForm />
          </View>
        </ScrollView>

        {/* Fixed button section at bottom */}
        <View className='px-4 pb-4'>
          <Button>Reset Password</Button>
        </View>
      </View>
    </Screen>
  );
}
