import { Screen } from '@/components/screen';
import { Typography } from 'heroui-native';
import { View } from 'react-native';

export default function VerifyNumberScreen() {
  return (
    <Screen>
      <View className='gap-3 p-4'>
        <Typography.Heading type='h2'>Verify Number</Typography.Heading>
      </View>
    </Screen>
  );
}
