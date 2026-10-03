import { Screen } from '@/components/screen';
import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import AcceptedMaterialsCard from '@/features/batch-processing/components/accepted-materials-card';
import OperatingInstructionsCard from '@/features/batch-processing/components/operating-instructions-card';
import { Button } from 'heroui-native';
import { ScrollView } from 'react-native';

export default function BatchProcessingScreen() {
  return (
    <Screen>
      <ScrollView
        contentContainerClassName='p-4 gap-6'
        showsVerticalScrollIndicator={false}
      >
        <Button className='shadow-accent/65 rounded-2xl shadow-[0_5px_0]'>
          <StyledMaterialDesignIcons
            name='play'
            size={20}
            className='text-foreground'
          />

          <Button.Label>START NEW BATCH</Button.Label>
        </Button>

        <AcceptedMaterialsCard />
        <OperatingInstructionsCard />
      </ScrollView>
    </Screen>
  );
}
