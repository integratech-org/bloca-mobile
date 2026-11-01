import { Screen } from '@/components/screen';
import { StyledRefreshControl } from '@/components/styled-refresh-control';
import { BatchSummaryCard } from '@/features/dashboard/components/batch-summary-card';
import { LiveSensorFeedsSection } from '@/features/dashboard/components/live-sensor-feeds-section';
import { MachineStatusCard } from '@/features/dashboard/components/machine-status-card';
import { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import { useCSSVariable } from 'uniwind';

export default function DashboardScreen() {
  const accent = useCSSVariable('--color-accent') as string;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <Screen>
      <ScrollView
        contentContainerClassName='p-4 gap-6'
        showsVerticalScrollIndicator={false}
        refreshControl={
          <StyledRefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[accent]}
            tintColorClassName='accent-accent'
            progressBackgroundColorClassName='accent-surface'
          />
        }
      >
        <MachineStatusCard />
        <LiveSensorFeedsSection />
        <BatchSummaryCard />
      </ScrollView>
    </Screen>
  );
}
