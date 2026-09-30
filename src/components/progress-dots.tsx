import { View } from 'react-native';

interface ProgressDotsProps {
  total: number;
  current: number;
  activeColor?: string;
  inactiveColor?: string;
}

export default function ProgressDots({
  total,
  current,
  activeColor = '#B35A30',
  inactiveColor = '#D9D9D9',
}: ProgressDotsProps) {
  return (
    <View className='flex-row items-center justify-center gap-2'>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          className='rounded-full'
          style={{
            width: current === index ? 32 : 8,
            height: 8,
            backgroundColor: current === index ? activeColor : inactiveColor,
          }}
        />
      ))}
    </View>
  );
}
