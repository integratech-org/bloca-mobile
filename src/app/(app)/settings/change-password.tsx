import { Screen } from '@/components/screen';
import { ScreenHeading } from '@/components/screen-heading';
import { View } from 'react-native';
import { ChangePasswordForm } from './change-password-form';

export default function ChangePasswordScreen() {
  return (
    <Screen edges={['bottom']}>
      <View className='flex-1 gap-6 p-4'>
        <ScreenHeading description='Enter your current password first, then choose a new one.' />

        <ChangePasswordForm />
      </View>
    </Screen>
  );
}
