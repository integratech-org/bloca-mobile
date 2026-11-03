import { StyledImage } from '@/components/styled-image';
import { Typography } from 'heroui-native';
import { View } from 'react-native';

export function WelcomeSlide() {
  return (
    <View className='flex-1'>
      <View className='gap-2'>
        <Typography.Heading type='h1'>Welcome, Operator</Typography.Heading>

        <Typography.Paragraph type='body'>
          You&apos;re set up as an Operator on BLOCA.
        </Typography.Paragraph>
      </View>

      <StyledImage
        source={require('@/features/onboarding/assets/factory-worker.svg')}
        contentFit='contain'
        className='w-full flex-1'
      />
    </View>
  );
}
