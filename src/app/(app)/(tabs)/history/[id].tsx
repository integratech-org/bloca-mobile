import { Screen } from '@/components/screen';
import BatchDetailsCard from '@/features/history/components/batch-details-section';
import MaterialCompositionCard from '@/features/history/components/material-composition-card';
import OperatorCard from '@/features/history/components/operator-card';
import PredictedStrengthCard from '@/features/history/components/predicted-strength-card';
import ProcessVariableDetailSheet from '@/features/history/components/process-variable-detail-sheet';
import StatusCard from '@/features/history/components/status-card';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';

export default function QualityReportScreen() {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <ScrollView
        contentContainerClassName='p-4 gap-6'
        showsVerticalScrollIndicator={false}
      >
        <View className='gap-3'>
          <StatusCard id='B-1' status='pass' timestamp='2023-08-15 14:30:00' />
          <OperatorCard operator='John Doe' />
        </View>
        <PredictedStrengthCard value={4.61} />
        <MaterialCompositionCard plasticPct={80} />
        <BatchDetailsCard
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
