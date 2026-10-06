import { Image } from 'expo-image';
import { Typography } from 'heroui-native';
import { View } from 'react-native';

export function OnboardingHeader() {
  return (
    <View className='mt-10 mb-4 flex-row items-center justify-center'>
      <Image
        source={require('@/assets/images/icon.svg')}
        style={{ width: 28, height: 28 }}
        contentFit='contain'
      />
      <Typography.Heading type='h4' className='text-accent ml-2'>
        BLOCA
      </Typography.Heading>
    </View>
  );
}
