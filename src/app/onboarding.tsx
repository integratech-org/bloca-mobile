import ExpandingDot from '@/components/expanding-dot';
import { Screen } from '@/components/screen';
import { BatchSlide } from '@/features/onboarding/components/batch-slide';
import { ChecklistSlide } from '@/features/onboarding/components/checklist-slide';
import { OnboardingHeader } from '@/features/onboarding/components/onboarding-header';
import { SafetySlide } from '@/features/onboarding/components/safety-slide';
import { WelcomeSlide } from '@/features/onboarding/components/welcome-slide';
import { useOnboardingStore } from '@/features/onboarding/stores/onboarding-store';
import { router } from 'expo-router';
import { Button } from 'heroui-native';
import { useRef, useState } from 'react';
import { View, Animated, FlatList, useWindowDimensions } from 'react-native';
import { useCSSVariable } from 'uniwind';

const SLIDES = [WelcomeSlide, SafetySlide, BatchSlide, ChecklistSlide];

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const flatListRef = useRef<FlatList>(null);
  const [scrollX] = useState(() => new Animated.Value(0));
  const [accent, muted] = useCSSVariable([
    '--color-accent',
    '--color-muted',
  ]) as string[];
  const completeOnboarding = useOnboardingStore((s) => s.completeOnboarding);

  const [index, setIndex] = useState(0);
  const [checklistDone, setChecklistDone] = useState(false);

  const isLast = index === SLIDES.length - 1;
  const goTo = (i: number) => flatListRef.current?.scrollToIndex({ index: i });
  const finish = () => {
    completeOnboarding();
    router.push('/auth/sign-in');
  };

  return (
    <Screen edges={['top', 'bottom']}>
      <View className='flex-1 gap-6 p-4'>
        <OnboardingHeader />

        <FlatList
          ref={flatListRef}
          className='-mx-4'
          data={SLIDES}
          keyExtractor={(_, i) => String(i)}
          renderItem={({ item: Slide }) => (
            <View style={{ width }} className='px-4'>
              <Slide onChecklistChange={setChecklistDone} />
            </View>
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          getItemLayout={(_, i) => ({
            length: width,
            offset: width * i,
            index: i,
          })}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            },
          )}
          onMomentumScrollEnd={(e) =>
            setIndex(Math.round(e.nativeEvent.contentOffset.x / width))
          }
        />

        <ExpandingDot
          data={SLIDES}
          expandingDotWidth={30}
          scrollX={scrollX}
          activeDotColor={accent}
          inActiveDotColor={muted}
          inActiveDotOpacity={0.5}
          dotStyle={{ width: 8, height: 8, borderRadius: 4 }}
          containerStyle={{ position: 'relative', bottom: 0 }}
        />

        <View className='gap-2'>
          <Button
            isDisabled={isLast && !checklistDone}
            onPress={isLast ? finish : () => goTo(index + 1)}
            className='rounded-2xl'
          >
            <Button.Label>{isLast ? 'Get started' : 'Next'}</Button.Label>
          </Button>

          {!isLast && (
            <Button onPress={finish} variant='outline' className='rounded-2xl'>
              <Button.Label>Skip</Button.Label>
            </Button>
          )}
        </View>
      </View>
    </Screen>
  );
}
