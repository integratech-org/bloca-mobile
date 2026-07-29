import { View, Text } from 'react-native';
import { Button } from 'heroui-native';
import StatusIndicatorCard from '@/components/tabs/dashboard/StatusIndicatorCard';
import SensorIndicatorCard from '@/components/tabs/dashboard/SensorIndicatorCard';
import SystemComponentSlider from '@/components/tabs/dashboard/SystemComponentSlider';
// import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardScreen() {
  return (
    <View className='flex-1 bg-white'>
      {/* Status Indicator */}
      <View className='px-4'>
        <StatusIndicatorCard />
      </View>

      {/* Sensor Indicator */}
      <View className='px-4 py-4'>
        <Text className='text-md py-2 text-neutral-500'>Sensor Indicators</Text>

        <View className='flex-row gap-2'>
          <View className='flex-1'>
            <SensorIndicatorCard />
          </View>

          <View className='flex-1'>
            <SensorIndicatorCard />
          </View>
        </View>
      </View>

      {/* Slider */}
      <View className='p-4'>
        <View className='gap-4'>
          <Text className='text-md text-neutral-500'>System Components</Text>
          <SystemComponentSlider />
        </View>
      </View>
    </View>
  );
}
