import { Screen } from '@/components/screen';
import { View } from 'react-native';
import { ScreenHeading } from '@/components/screen-heading';
import { ChangeContactForm } from '@/features/settings/components/change-contact-form';

export default function ChangeContactScreen() {
  return (
    <Screen edges={['bottom']}>
      <View className='flex-1 gap-6 p-4'>
        <ScreenHeading description="Current number: +63 9&bull;&bull; &bull;&bull;&bull; &bull;&bull;34. We'll text a 6-digit code to the new number to confirm it." />

        <ChangeContactForm />
      </View>
    </Screen>
  );
}
