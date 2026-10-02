import { Card, Typography } from 'heroui-native';
import { View } from 'react-native';
import { LegendItem } from './legend-item';
import { useCSSVariable } from 'uniwind';

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
    <Card className='gap-2 rounded-2xl'>
      <Card.Header>
        <View className='flex-row items-center justify-between'>
          <Typography.Paragraph
            type='body-xs'
            className='text-muted font-medium uppercase'
          >
            MATERIAL COMPOSITION
          </Typography.Paragraph>

          <Typography.Paragraph
            type='body-xs'
            className='text-muted font-medium'
          >
            by weight
          </Typography.Paragraph>
        </View>
      </Card.Header>

      <Card.Body>
        <View>
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
      </Card.Body>
    </Card>
  );
}
