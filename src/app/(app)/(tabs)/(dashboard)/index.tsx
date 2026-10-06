import { Screen } from '@/components/screen';
import BatchSummaryCard from '@/features/dashboard/components/batch-summary-card';
import LiveSensorFeedsSection from '@/features/dashboard/components/live-sensor-feeds-section';
import MachineStatusCard from '@/features/dashboard/components/machine-status-card';
import { ScrollView } from 'react-native';

export default function DashboardScreen() {
  return (
    <Screen>
      <ScrollView
        contentContainerClassName='p-4 gap-6'
        showsVerticalScrollIndicator={false}
      >
        <MachineStatusCard />
        <LiveSensorFeedsSection />
        <BatchSummaryCard />
      </ScrollView>
    </Screen>
  );
}
