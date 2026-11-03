import { batchItems } from '@/features/onboarding/constants';
import { Typography } from 'heroui-native';
import { View } from 'react-native';
import { BatchListItem } from './batch-list-item';

export function BatchSlide() {
  return (
    <View className='flex-1'>
      <View className='gap-2'>
        <Typography.Heading type='h1'>Run a Batch</Typography.Heading>

        <Typography.Paragraph type='body'>
          as an Operator these are your responsibilities.
        </Typography.Paragraph>
      </View>

      <View className='flex-1 justify-center gap-4'>
        {batchItems.map((item) => (
          <BatchListItem key={item.text} item={item} />
        ))}
      </View>
    </View>
  );
}
