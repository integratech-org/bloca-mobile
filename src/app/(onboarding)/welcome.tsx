import { Screen } from '@/components/screen';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <Screen>
      {/* Welcome Text */}
      <View className='px-4'>
        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 36 }}>
          Welcome, {'\n'}Operator
        </Text>
      </View>

      {/* Description Text */}
      <View className='px-4'>
        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 14 }}>
          You&apos;re set up as an Operator on BLOCA.
        </Text>
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
