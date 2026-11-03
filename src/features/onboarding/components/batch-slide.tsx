import { batchItems } from '@/features/onboarding/constants';
import { View } from 'react-native';
import { BatchListItem } from './batch-list-item';
import { ScreenHeading } from '@/components/screen-heading';

export function BatchSlide() {
  return (
    <View className='flex-1'>
      <ScreenHeading
        title='Run a batch'
        description='As an Operator these are your responsibilities.'
      />

      <View className='flex-1 justify-center gap-4'>
        {batchItems.map((item) => (
          <BatchListItem key={item.text} item={item} />
        ))}
      </View>
    </View>
  );
}
