import { Screen } from '@/components/screen';
import { Typography } from 'heroui-native';
import { View } from 'react-native';

export default function ChangeContactScreen() {
  return (
    <Screen>
      <View className='gap-3 p-4'>
        <Typography.Heading type='h2'>Change Contact</Typography.Heading>
      </View>
    </Screen>
  );
}
