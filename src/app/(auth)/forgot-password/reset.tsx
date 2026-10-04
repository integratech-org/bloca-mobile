import { Screen } from '@/components/screen';
import { AuthHeader } from '@/features/auth/components/auth-header';
import { ResetForm } from '@/features/auth/components/forms/reset-form';
import { Typography } from 'heroui-native';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ForgotPasswordResetScreen() {
  // TODO: forgot password reset screen
  return (
    <Screen>
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        <AuthHeader />
        <View className='p-4'>
          {/* Title and Subheading*/}
          <View className='mb-6'>
            <Typography.Heading>Set a new password</Typography.Heading>

            <Typography type='body'>
              Code verified. Choose a password you haven&apos;t used before.
            </Typography>
          </View>

          <View className='gap-4'>
            {/* Reset Form */}
            <ResetForm />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
