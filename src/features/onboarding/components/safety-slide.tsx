import { safetyItems } from '@/features/onboarding/constants';
import { Typography } from 'heroui-native';
import { View } from 'react-native';
import { SafetyListItem } from './safety-list-item';

export function SafetySlide() {
  return (
    <View className='flex-1'>
      <View className='gap-2'>
        <Typography.Heading type='h1'>Safety First</Typography.Heading>

        <Typography.Paragraph type='body'>
          Things you must know as an Operator on BLOCA.
        </Typography.Paragraph>
      </View>

      <View className='flex-1 justify-center gap-6'>
        {safetyItems.map((item) => (
          <SafetyListItem key={item.text} item={item} />
        ))}
      </View>
    </View>
  );
}
