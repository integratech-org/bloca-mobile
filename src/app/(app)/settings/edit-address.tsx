import { Screen } from '@/components/screen';
import { ScreenHeading } from '@/components/screen-heading';
import { View } from 'react-native';
import { EditAddressForm } from './edit-address-form';

export default function EditAddressScreen() {
  return (
    <Screen edges={['bottom']}>
      <View className='flex-1 gap-6 p-4'>
        <ScreenHeading description='This is the only detail you can update yourself.' />

        <EditAddressForm />
      </View>
    </Screen>
  );
}
