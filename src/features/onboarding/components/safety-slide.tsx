import { safetyItems } from '@/features/onboarding/constants';
import { View } from 'react-native';
import { SafetyListItem } from './safety-list-item';
import { ScreenHeading } from '@/components/screen-heading';

export function SafetySlide() {
  return (
    <View className='flex-1'>
      <ScreenHeading
        title='Safety first'
        description='Things you must know as an Operator on BLOCA.'
      />

      <View className='flex-1 justify-center gap-6'>
        {safetyItems.map((item) => (
          <SafetyListItem key={item.text} item={item} />
        ))}
      </View>
    </View>
  );
}
