import { Section } from '@/components/section';
import { Surface, Typography } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  value: number;
}

export default function PredictedStrengthCard({ value }: Props) {
  return (
    <Section title='Predicted strength'>
      <Surface className='rounded-2xl'>
        <View className='flex-row items-baseline gap-1'>
          <Typography.Paragraph className='text-3xl font-semibold'>
            {value.toFixed(2)}
          </Typography.Paragraph>
          <Typography.Paragraph className='text-muted text-sm'>
            MPa
          </Typography.Paragraph>
        </View>
      </Surface>
    </Section>
  );
}
