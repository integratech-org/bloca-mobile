import { Screen } from '@/components/screen';
import StepIndicator from '@/components/step-indicator';
import { BatchWorkflowStep } from '@/features/onboarding/components/batch/batch-workflow-step';
import { ChecklistStep } from '@/features/onboarding/components/checklist/checklist-step';
import { SafetyStep } from '@/features/onboarding/components/safety/safety-step';
import { OnboardingHeader } from '@/features/onboarding/components/shared/onboarding-header';
import { WelcomeStep } from '@/features/onboarding/components/welcome/welcome-step';
import { router } from 'expo-router';
import { Button } from 'heroui-native';
import { useCallback, useRef, useState } from 'react';
import { Dimensions, FlatList, ScrollView, View } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const steps = [
  { id: '1', component: WelcomeStep },
  { id: '2', component: SafetyStep },
  { id: '3', component: BatchWorkflowStep },
  { id: '4', component: ChecklistStep },
];

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  // Reference to FlatList for programmatic scrolling
  const flatListRef = useRef<FlatList>(null);

  const isLastStep = currentStep === steps.length - 1;

  // Handle Next/Get Started button press
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      // Scroll to next step
      flatListRef.current?.scrollToIndex({
        index: currentStep + 1,
        animated: true,
      });
    } else {
      // Last step - navigate to sign-in
      router.push('/(auth)/sign-in');
    }
  };

  // Track which step is currently visible when user swipes
  const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentStep(viewableItems[0].index ?? 0);
    }
  }, []);

  // Define when a step is considered "visible" (50% threshold)
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  // Render each step in full screen width
  // Render each step in full screen width with internal scrolling
  const renderItem = ({ item }: any) => {
    const StepComponent = item.component;
    return (
      <ScrollView
        style={{ width: SCREEN_WIDTH }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <StepComponent />
      </ScrollView>
    );
  };

  return (
    <Screen edges={['left', 'right', 'bottom']}>
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        <View className='flex-1 bg-white'>
          <OnboardingHeader />

          <FlatList
            ref={flatListRef}
            data={steps}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            scrollEventThrottle={16}
          />

          <View className='items-center justify-center p-4'>
            <StepIndicator total={steps.length} current={currentStep} />
          </View>

          <View className='gap-2 px-4 pb-4'>
            <Button onPress={handleNext}>
              {isLastStep ? 'Get Started' : 'Next'}
            </Button>

            <Button
              variant='outline'
              onPress={() => router.push('/(auth)/sign-in')}
            >
              Skip
            </Button>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
