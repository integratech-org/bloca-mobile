import { Image } from 'expo-image';
import { Typography } from 'heroui-native';
import { View } from 'react-native';

export function WelcomeStep() {
  return (
    <View className='flex-1 px-4'>
      <View className='px-4'>
        <Typography.Heading>Welcome, Operator</Typography.Heading>
      </View>

      <View className='mt-2 px-4'>
        <Typography.Paragraph type='body'>
          You&apos;re set up as an Operator on BLOCA.
        </Typography.Paragraph>
      </View>

      <View className='mt-8 items-center justify-center'>
        <Image
          source={require('@/assets/images/factory-worker-illustration.svg')}
          style={{ width: 320, height: 320 }}
          contentFit='contain'
        />
      </View>
    </View>
  );
}
