import { Card, Typography } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  value: number;
  unit?: string;
}

export default function PredictedStrengthCard({ value, unit = 'MPa' }: Props) {
  return (
    <Card className='gap-2 rounded-2xl'>
      <Card.Header>
        <Typography.Paragraph
          type='body-xs'
          className='text-muted font-medium uppercase'
        >
          PREDICTED STRENGTH
        </Typography.Paragraph>
      </Card.Header>

      <Card.Body>
        <View className='flex-row items-baseline gap-1'>
          <Typography.Paragraph className='text-3xl font-semibold'>
            {value.toFixed(2)}
          </Typography.Paragraph>
          <Typography.Paragraph className='text-muted text-sm'>
            {unit}
          </Typography.Paragraph>
        </View>
      </Card.Body>
    </Card>
  );
}
