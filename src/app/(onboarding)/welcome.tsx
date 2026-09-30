import { View, Text, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'heroui-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  return (
    <SafeAreaView
      className='flex-1 bg-white'
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#FFFFFF' }}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      >
        {/* Bloca Header */}
        <View className='mt-4 flex-row items-center justify-center'>
          <Image
            source={require('@/assets/splash/bloca-splash-icon.svg')}
            style={{ width: 28, height: 28 }}
            contentFit='contain'
          />
          <Text
            style={{ fontFamily: 'Inter_700Bold', fontSize: 24 }}
            className='ml-2 text-[#C45A27]'
          >
            BLOCA
          </Text>
        </View>

        {/* Welcome Text */}
        <View className='mt-4 px-4'>
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

        {/* Button */}
        <View className='gap-2 px-4'>
          <Button>
            <Button.Label
              style={{ fontFamily: 'Inter_400Regular', fontSize: 14 }}
            >
              Next
            </Button.Label>
          </Button>

          <Button variant='outline'>
            <Button.Label
              style={{ fontFamily: 'Inter_400Regular', fontSize: 14 }}
            >
              Skip
            </Button.Label>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
