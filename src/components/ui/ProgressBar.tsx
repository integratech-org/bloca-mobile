import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { View } from 'react-native';
import { useEffect } from 'react';

export default function ProgressBar({ progress }: { progress: number }) {
  const width = useSharedValue(progress);

  useEffect(() => {
    width.value = withTiming(progress, { duration: 400 });
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${width.value * 100}%`,
  }));

  return (
    <View className='h-2 w-full overflow-hidden rounded-full bg-[#F4DCCB]'>
      <Animated.View
        className='h-full rounded-full bg-white'
        style={animatedStyle}
      />
    </View>
  );
}
