import MachinePreview from '@/components/tabs/processing/MachinePreview';
import { Button } from 'heroui-native';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollShadow } from 'heroui-native/scroll-shadow';
import { ScrollView } from 'react-native-gesture-handler';
import MachineInformation from '@/components/tabs/processing/MachineInformation';
import { router } from 'expo-router';

export default function ProcessingScreen() {
  return (
    <ScrollShadow LinearGradientComponent={LinearGradient} visibility='top'>
      <ScrollView contentContainerClassName='flex-grow'>
        <View className='flex-1 bg-white'>
          <View className='px-4'>
            <Button
              className='gap-2 bg-[#B35A30] text-white'
              size='md'
              variant='primary'
              feedbackVariant='scale-ripple'
              onPress={() => router.push('/(tabs)/(sub-processing)/checklist')}
            >
              Start Batch
            </Button>
          </View>

          {/* Machine Information Layout */}
          <View className='gap-2 p-4'>
            {/* Machine Preview Card */}
            <View>
              <MachinePreview />
            </View>

            {/* Machine Information Card */}
            <View className='mt-2'>
              <MachineInformation />
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollShadow>
  );
}
