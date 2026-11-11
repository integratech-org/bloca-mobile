import { Screen } from '@/components/screen';
import { StyledRefreshControl } from '@/components/styled-refresh-control';
import { BatchDetailsSection } from '@/features/history/components/batch-details-section';
import { MaterialCompositionCard } from '@/features/history/components/material-composition-card';
import { OperatorCard } from '@/features/history/components/operator-card';
import { PredictedStrengthCard } from '@/features/history/components/predicted-strength-card';
import { ProcessVariableDetailSheet } from '@/features/history/components/process-variable-detail-sheet';
import { StatusCard } from '@/features/history/components/status-card';
import { useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useCSSVariable } from 'uniwind';

export default function QualityReportScreen() {
  const { id } = useLocalSearchParams();
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
        <StatusCard id='B-1' status='pass' timestamp='2023-08-15 14:30:00' />
        <PredictedStrengthCard value={4.61} />
        <MaterialCompositionCard plasticPct={80} />
        <BatchDetailsSection
          maxTemp={110}
          peakPressure={20}
          heatingDuration='00:30'
          coolingTime='01:30'
          compressedHeight={10}
          powerDraw={4.6}
        />
      </ScrollView>

      <ProcessVariableDetailSheet />
    </Screen>
  );
}
