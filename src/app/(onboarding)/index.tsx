import { Screen } from '@/components/screen';
import { Image } from 'expo-image';
import { Typography } from 'heroui-native';
import { Text, View } from 'react-native';

export default function GetStartedScreen() {
  return (
    <Screen className='bg-white'>
      {/* Welcome Text */}
      <View className='px-4'>
        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 36 }}>
          Welcome, {'\n'}Operator
        </Text>
      </View>

      {/* Description Text */}
      <View className='px-4'>
        <Typography.Paragraph>
          You&apos;re set up as an Operator on BLOCA.
        </Typography.Paragraph>
      </View>

      {/* Image PNG */}
      <View className='items-center justify-center'>
        <Image
          source={require('@/assets/images/factory-worker-illustration.svg')}
          style={{ width: 320, height: 320 }}
          contentFit='contain'
        />
      </View>
    </Screen>
  );
}
