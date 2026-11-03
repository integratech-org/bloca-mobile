import { ScreenHeading } from '@/components/screen-heading';
import { StyledImage } from '@/components/styled-image';
import { View } from 'react-native';

export function WelcomeSlide() {
  return (
    <View className='flex-1'>
      <ScreenHeading
        title='Welcome, Operator'
        description="You're set up as an Operator on BLOCA."
      />

      <StyledImage
        source={require('@/features/onboarding/assets/factory-worker.svg')}
        contentFit='contain'
        className='flex-1'
      />
    </View>
  );
}
