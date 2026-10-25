import { Section } from '@/components/section';
import { DualAxisChart } from './dual-axis-chart';
import { Surface } from 'heroui-native';
import { View } from 'react-native';
import { LegendItem } from '@/features/history/components/legend-item';

export default function BatchSummaryCard() {
  return (
    <Section title='Previous Batch Summary'>
      <Surface className='rounded-2xl'>
        <View className='flex-row items-center justify-center gap-4'>
          <LegendItem color='#b5573a' label='Plastic (LDPE)' />
          <LegendItem color='#6a9bb0' label='Sand' />
        </View>

        <View className='gap-2'>
          <DualAxisChart />
        </View>
      </Surface>
    </Section>
  );
}
