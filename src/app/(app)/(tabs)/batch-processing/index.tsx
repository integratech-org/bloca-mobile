import { Screen } from '@/components/screen';
import { AcceptedMaterialsCard } from '@/features/batch-processing/components/accepted-materials-card';
import { OperatingInstructionsCard } from '@/features/batch-processing/components/operating-instructions-card';
import { router } from 'expo-router';
import { Button } from 'heroui-native';
import { PlayIcon } from 'phosphor-react-native';
import { ScrollView } from 'react-native';
import { useCSSVariable } from 'uniwind';

export default function BatchProcessingScreen() {
  const [accentFg] = useCSSVariable(['--color-accent-foreground']) as string[];

  return (
    <Screen>
      <ScrollView
        contentContainerClassName='p-4 gap-6'
        showsVerticalScrollIndicator={false}
      >
        <Button
          className='shadow-accent/65 rounded-2xl shadow-[0_5px_0]'
          onPress={() => router.push('/batch-processing/new-batch')}
        >
          <PlayIcon size={20} color={accentFg} weight='bold' />

          <Button.Label>START NEW BATCH</Button.Label>
        </Button>

        <AcceptedMaterialsCard />
        <OperatingInstructionsCard />
      </ScrollView>
    </Screen>
  );
}
