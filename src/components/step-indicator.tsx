import { View } from 'react-native';

interface Props {
  total: number;
  current: number;
  activeColor?: string;
  inactiveColor?: string;
}

export default function StepIndicator({ total, current }: Props) {
  return (
    <View className='flex-row items-center justify-center gap-2'>
      {Array.from({ length: total }).map((_, index) => {
        const isActive = current === index;

        return (
          <View
            key={index}
            className={`h-2 rounded-full ${
              isActive ? 'bg-accent w-8' : 'bg-muted w-2'
            }`}
          />
        );
      })}
    </View>
  );
}
