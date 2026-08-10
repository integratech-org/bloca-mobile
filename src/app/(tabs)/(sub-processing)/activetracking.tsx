import ProcessTimeline from '@/components/tabs/sub-processing/activetracking/ProcessTimeLine';
import { View, Text } from 'react-native';

export default function ActiveTrackingScreen() {
  return (
    <View className='flex-1 bg-white px-4'>
      <View>
        <Text> Tracking Progress </Text>
        <ProcessTimeline />
      </View>
    </View>
  );
}
