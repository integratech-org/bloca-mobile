import { Surface } from 'heroui-native';
import { View } from 'react-native';
import { LegendItem } from './legend-item';
import { useCSSVariable } from 'uniwind';
import { Section } from '@/components/section';

interface Props {
  plasticPct: number;
}

export default function MaterialCompositionCard({ plasticPct }: Props) {
  const sandPct = 100 - plasticPct;
  const [chart1, chart2] = useCSSVariable([
    '--chart-1',
    '--chart-2',
  ]) as string[];

  return (
    <Section title='Material composition' trailing='by weight'>
      <Surface className='rounded-2xl'>
        <View className='gap-2'>
          <View className='h-3 flex-row overflow-hidden rounded-full'>
            <View style={{ flex: plasticPct, backgroundColor: chart1 }} />
            <View style={{ flex: sandPct, backgroundColor: chart2 }} />
          </View>

          <View className='flex-row justify-between'>
            <LegendItem
              color={chart1}
              label='Plastic (LDPE)'
              percent={plasticPct}
            />
            <LegendItem color={chart2} label='Sand' percent={sandPct} />
          </View>
        </View>
      </Surface>
    </Section>
  );
}
