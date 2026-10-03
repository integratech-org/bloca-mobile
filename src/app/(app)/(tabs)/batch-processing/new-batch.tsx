import { Screen } from '@/components/screen';
import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import EquipmentChecklistCard from '@/features/batch-processing/components/equipment-checklist-card';
import FeedstockValidationCard from '@/features/batch-processing/components/feedstock-validation-card';
import { router } from 'expo-router';
import { Button } from 'heroui-native';
import { ScrollView } from 'react-native';

export default function NewBatchScreen() {
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
          <StyledMaterialDesignIcons
            name='play'
            size={20}
            className='text-accent-foreground'
          />

          <Button.Label>START SHREDDING</Button.Label>
        </Button>
      </ScrollView>
    </Screen>
  );
}
