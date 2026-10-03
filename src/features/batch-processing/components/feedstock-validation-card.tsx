import NumberStepper from '@/components/number-stepper';
import { Section } from '@/components/section';
import { Surface, Typography } from 'heroui-native';
import { View } from 'react-native';
import ProportionSelector from './proportion-selector';
import { Proportion } from '../api/feedstock-schema';
import { useState } from 'react';

export default function FeedstockValidationCard() {
  const [proportion, setProportion] = useState<Proportion | null>(null);

  return (
    <Section title='Feedstock Validation'>
      <Surface className='gap-6 rounded-2xl'>
        <View className='gap-2'>
          <Typography.Paragraph type='body-sm' className='text-muted'>
            LDPE Weight (kg)
          </Typography.Paragraph>
          <NumberStepper defaultValue={0.55} label='LDPE Weight (kg)' />
        </View>

        <View className='gap-2'>
          <Typography.Paragraph type='body-sm' className='text-muted'>
            Plastic-to-Sand Proportion
          </Typography.Paragraph>
          <ProportionSelector value={proportion} onChange={setProportion} />
        </View>
      </Surface>
    </Section>
  );
}
