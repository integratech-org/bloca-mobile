import ProgressDots from '@/components/progress-dots';
import { Image } from 'expo-image';
import { Slot } from 'expo-router';
import { Button } from 'heroui-native';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnboardingLayout() {
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

        <View className='bg-white'>
          <Slot />
        </View>

        {/* Progress Dots */}
        <View className='items-center justify-center p-4'>
          <ProgressDots total={4} current={0} />
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
