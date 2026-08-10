import { View, Text } from 'react-native';
import { Card } from 'heroui-native/card';
import { Ionicons } from '@expo/vector-icons';

export default function ProcessTimeline() {
  return (
    <View className='flex-row bg-[#252525] px-4 py-6'>
      {/* Timeline */}
      <View className='w-10 items-center'>
        {/* Top */}
        <View className='h-4 w-[2px] bg-[#C76A38]' />

        {/* Step 1 */}
        <View className='h-7 w-7 items-center justify-center rounded-full bg-[#C76A38]'>
          <Ionicons name='checkmark' size={16} color='white' />
        </View>

        <View className='h-12 w-[2px] bg-[#C76A38]' />

        {/* Step 2 */}
        <View className='h-7 w-7 items-center justify-center rounded-full bg-[#C76A38]'>
          <Ionicons name='checkmark' size={16} color='white' />
        </View>

        <View className='h-12 w-[2px] bg-[#C76A38]' />

        {/* Active Step */}
        <View className='h-7 w-7 items-center justify-center rounded-full bg-[#C76A38]'>
          <View className='h-3.5 w-3.5 rounded-full bg-white' />
        </View>

        <View className='h-12 w-[2px] bg-[#5B5B5B]' />

        {/* Waiting */}
        <View className='h-7 w-7 rounded-full border-2 border-[#6A6A6A]' />

        <View className='h-12 w-[2px] bg-[#5B5B5B]' />

        {/* Waiting */}
        <View className='h-7 w-7 rounded-full border-2 border-[#6A6A6A]' />
      </View>

      {/* Cards */}
      <View className='ml-3 flex-1 gap-4'>
        {/* Shredding */}
        <Card className='rounded-2xl bg-[#1B1B1B] px-4 py-4'>
          <Text className='text-lg font-bold text-white'>Shredding</Text>

          <Text className='mt-1 text-emerald-500'>Completed · 4m 12s</Text>
        </Card>

        {/* Melting */}
        <Card className='rounded-2xl bg-[#1B1B1B] px-4 py-4'>
          <Text className='text-lg font-bold text-white'>Melting</Text>

          <Text className='mt-1 text-emerald-500'>Completed · 6m 40s</Text>
        </Card>

        {/* Compacting */}
        <Card className='rounded-2xl border border-[#C76A38] bg-[#F8ECE6] px-4 py-4'>
          <Text className='text-lg font-bold text-[#9E4D23]'>Compacting</Text>

          <Text className='mt-1 text-[#9E4D23]'>
            In progress · 2m 03s elapsed
          </Text>
        </Card>

        {/* Cooling */}
        <Card className='rounded-2xl bg-[#1B1B1B] px-4 py-4'>
          <Text className='text-lg font-bold text-[#7B7B7B]'>Cooling</Text>

          <Text className='mt-1 text-[#7B7B7B]'>Waiting</Text>
        </Card>

        {/* Quality Checking */}
        <Card className='rounded-2xl bg-[#1B1B1B] px-4 py-4'>
          <Text className='text-lg font-bold text-[#7B7B7B]'>
            Quality Checking
          </Text>

          <Text className='mt-1 text-[#7B7B7B]'>
            Conveyor & camera scan · waiting
          </Text>
        </Card>
      </View>
    </View>
  );
}
