import { Screen } from '@/components/screen';
import { EmergencyStopButton } from '@/features/batch-processing/components/emergency-stop-button';
import KillPowerDialog from '@/features/batch-processing/components/kill-power-dialog';
import LiveReadingsGrid from '@/features/batch-processing/components/live-readings-grid';
import PhaseCard from '@/features/batch-processing/components/phase-card';
import { useState } from 'react';
import { ScrollView } from 'react-native';

export default function ActiveTrackingScreen() {
  const [isKillPowerDialogOpen, setIsKillPowerDialogOpen] = useState(false);

  return (
    <Screen>
      <ScrollView
        contentContainerClassName='p-4 gap-6'
        showsVerticalScrollIndicator={false}
      >
        <PhaseCard />
        <LiveReadingsGrid
          maxTemp={120}
          peakPressure={30}
          heatingDuration={'00:10:00'}
          coolingTime={'00:05:00'}
          compressedHeight={15}
          powerDraw={5}
        />
        <EmergencyStopButton onPress={() => setIsKillPowerDialogOpen(true)} />
      </ScrollView>

      <KillPowerDialog
        isOpen={isKillPowerDialogOpen}
        onOpenChange={setIsKillPowerDialogOpen}
      />
    </Screen>
  );
}
