import { Section } from '@/components/section';
import SensorStatusCard from './sensor-status-card';
import { View } from 'react-native';

export default function LiveSensorFeedsSection() {
  return (
    <Section title='Live Sensor Feeds'>
      <View className='flex-row gap-2'>
        <SensorStatusCard />
        <SensorStatusCard />
      </View>
    </Section>
  );
}
