import { batchFeatures } from '@/features/onboarding/constants';
import { Typography } from 'heroui-native';
import { View } from 'react-native';
import { BatchFeatureItem } from './batch-feature-item';

export function BatchWorkflowStep() {
  return (
    <View className='flex-1 px-4'>
      <View className='px-4'>
        <Typography.Heading type='h2'>Run a Batch</Typography.Heading>
      </View>

      <View className='mt-2 px-4'>
        <Typography.Paragraph type='body'>
          as an Operator these are your responsibilities.
        </Typography.Paragraph>
      </View>

      <View className='justify-between px-4 py-4'>
        {batchFeatures.map((feature) => (
          <BatchFeatureItem key={feature.text} feature={feature} />
        ))}
      </View>
    </View>
  );
}
