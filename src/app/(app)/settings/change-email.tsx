import { Screen } from '@/components/screen';
import { View } from 'react-native';
import { ChangeEmailForm } from './change-email-form';
import { ScreenHeading } from '@/components/screen-heading';

export default function ChangeEmailScreen() {
  return (
    <Screen edges={['bottom']}>
      <View className='flex-1 gap-6 p-4'>
        <ScreenHeading description="Current email: a•••@company.com. We'll send a 6-digit code to the new address to confirm it." />

        <ChangeEmailForm />
      </View>
    </Screen>
  );
}
