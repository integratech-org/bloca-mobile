import { View, Text } from 'react-native';
import { Card } from 'heroui-native';
import { MaterialIcons } from '@expo/vector-icons';

import ProgressBar from '@/components/ui/ProgressBar';
export default function StatusIndicatorCard() {
  return (
    <Card className='rounded-2xl bg-[#C15B33] px-4 py-4'>
      {/* Top row: flame icon + label/title on the left, chevron on the right */}
      <View className='flex-row items-start justify-between'>
        <View className='flex-row items-center gap-3'>
          <View className='rounded-full bg-[#f4f1f25b] p-2'>
            <MaterialIcons
              name='whatshot'
              className='items-center rounded-full'
              color='white'
              size={25}
            />
          </View>

          <View>
            <Text className='text-[13px] text-neutral-200'>
              Your machine is
            </Text>
            <Text className='text-[22px] font-extrabold tracking-wide text-white'>
              HEATING
            </Text>
          </View>
        </View>
        {/* Batch label */}
        <Text className='text-[13px] font-semibold text-neutral-200'>
          Batch 45
        </Text>
      </View>

      {/* Progress bar (static value, plain View — no Pro dependency) */}
      <View className='mt-2 h-2 w-full overflow-hidden rounded-full bg-[#F4DCCB]'>
        <ProgressBar progress={0.5} />
      </View>
    </Card>
  );
}
