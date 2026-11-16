import { Screen } from '@/components/screen';
import { ScreenHeading } from '@/components/screen-heading';
import { VerifyEmailForm } from '@/features/settings/components/verify-email-form';
import { View } from 'react-native';

export default function VerifyEmailScreen() {
  return (
    <Screen edges={['bottom']}>
      <View className='flex-1 gap-6 p-4'>
        <ScreenHeading
          title='Enter the 6-digit code'
          description='We sent a code to n•••@company.com. It expires in 10 minutes.'
        />

        <VerifyEmailForm />
      </View>
    </Screen>
  );
}
