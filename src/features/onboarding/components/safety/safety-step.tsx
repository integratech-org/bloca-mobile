import { safetyFeatures } from '@/features/onboarding/constants';
import { Typography } from 'heroui-native';
import { View } from 'react-native';
import { SafetyFeatureItem } from './safety-feature-item';

export function SafetyStep() {
  return (
    <View className='flex-1 px-4'>
      <View className='px-4'>
        <Typography.Heading>Safety First</Typography.Heading>
      </View>

      <View className='mt-2 px-4'>
        <Typography.Paragraph type='body'>
          Things you must know as an Operator on BLOCA.
        </Typography.Paragraph>
      </View>

      <View className='items-center justify-center px-4 py-10'>
        {safetyFeatures.map((feature) => (
          <SafetyFeatureItem key={feature.text} feature={feature} />
        ))}
      </View>
    </View>
  );
}
