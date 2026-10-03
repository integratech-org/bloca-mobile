import StepIndicator from '@/components/step-indicator';
import { Image } from 'expo-image';
import { Slot, usePathname, useRouter } from 'expo-router';
import { Button } from 'heroui-native';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnboardingLayout() {
  const router = useRouter();
  const pathname = usePathname();

  // map the current path to a step number for the progress dots
  const getStepFromPath = (path: string): number => {
    if (
      path === '/(onboarding)' ||
      path === '/(onboarding)/' ||
      !path.includes('page')
    )
      return 0;
    if (path.includes('welcome-pagetwo')) return 1;
    if (path.includes('welcome-pagethree')) return 2;
    if (path.includes('welcome-pagefour')) return 3;
    return 0; // Default to step 0 if no match
  };

  const currentStep = getStepFromPath(pathname);
  const totalSteps = 4; // Total number of onboarding steps
  const isLastStep = currentStep === totalSteps - 1;

  const handleNext = () => {
    switch (currentStep) {
      case 0:
        router.push('/(onboarding)/welcome-pagetwo');
        break;
      case 1:
        router.push('/(onboarding)/welcome-pagethree');
        break;
      case 2:
        router.push('/(onboarding)/welcome-pagefour');
        break;
      case 3:
        router.push('/(auth)/sign-in');
        break;
    }
  };

  const handleSkip = () => {
    router.push('/(auth)/sign-in');
  };

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
          <StepIndicator total={totalSteps} current={currentStep} />
        </View>

        {/* Button */}
        <View className='gap-2 px-4'>
          <Button onPress={handleNext}>
            <Button.Label
              style={{ fontFamily: 'Inter_400Regular', fontSize: 14 }}
            >
              {isLastStep ? 'Get Started' : 'Next'}
            </Button.Label>
          </Button>

          <Button variant='outline' onPress={handleSkip}>
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
