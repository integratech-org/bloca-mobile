import { Section } from '@/components/section';
import { Surface } from 'heroui-native';
import { steps } from '../constants/steps';
import InstructionStep from './instruction-step';

export default function OperatingInstructionsCard() {
  return (
    <Section
      title='Feedstock & Operating Instructions'
      icon='information-slab-circle-outline'
    >
      <Surface className='gap-3 rounded-2xl'>
        {steps.map((step, i) => (
          <InstructionStep
            key={i}
            step={i + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </Surface>
    </Section>
  );
}
