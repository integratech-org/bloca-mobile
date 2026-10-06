import { Typography } from 'heroui-native';
import { View } from 'react-native';

export default function StatusPill() {
  return (
    <View className='bg-accent/10 items-center justify-center rounded-full px-2 py-1'>
      <Typography.Paragraph type='body-xs' className='text-accent'>
        Target Temperature Approaching...
      </Typography.Paragraph>
    </View>
  );
}
