import { StyledImage } from '@/components/styled-image';
import { Typography } from 'heroui-native';
import { View } from 'react-native';

export function OnboardingHeader() {
  return (
    <View className='flex-row items-center justify-center gap-3'>
      <StyledImage
        source={require('@/assets/images/logo.svg')}
        contentFit='contain'
        className='size-8'
      />
      <Typography.Heading type='h2' className='text-accent'>
        BLOCA
      </Typography.Heading>
    </View>
  );
}
