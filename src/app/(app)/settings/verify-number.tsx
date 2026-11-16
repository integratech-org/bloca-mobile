import { Screen } from '@/components/screen';
import { ScreenHeading } from '@/components/screen-heading';
import { VerifyNumberForm } from '@/features/settings/components/verify-number-form';
import { View } from 'react-native';

export default function VerifyNumberScreen() {
  return (
    <Screen edges={['bottom']}>
      <View className='flex-1 gap-6 p-4'>
        <ScreenHeading
          title='Enter the 6-digit code'
          description='We texted a code to +63 9•• ••• ••34. It expires in 10 minutes.'
        />

        <VerifyNumberForm />
      </View>
    </Screen>
  );
}
