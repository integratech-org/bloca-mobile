import { Screen } from '@/components/screen';
import { EquipmentChecklistCard } from '@/features/batch-processing/components/equipment-checklist-card';
import { FeedstockValidationCard } from '@/features/batch-processing/components/feedstock-validation-card';
import { router } from 'expo-router';
import { Button } from 'heroui-native';
import { PlayIcon } from 'phosphor-react-native';
import { ScrollView } from 'react-native';
import { useCSSVariable } from 'uniwind';

export default function NewBatchScreen() {
  const [accentFg] = useCSSVariable(['--color-accent-foreground']) as string[];

  return (
    <Screen>
      <ScrollView
        contentContainerClassName='p-4 gap-6'
        showsVerticalScrollIndicator={false}
      >
        <FeedstockValidationCard />
        <EquipmentChecklistCard />

        <Button
          className='shadow-accent/65 rounded-2xl shadow-[0_5px_0]'
          onPress={() => router.push('/batch-processing/active-tracking')}
        >
          <PlayIcon size={20} color={accentFg} weight='bold' />

          <Button.Label>START SHREDDING</Button.Label>
        </Button>
      </ScrollView>
    </Screen>
  );
}
