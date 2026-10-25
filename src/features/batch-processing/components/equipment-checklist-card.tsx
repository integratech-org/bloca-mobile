import { Section } from '@/components/section';
import { Surface } from 'heroui-native';
import EquipmentChecklistItem from './equipment-checklist-item';

const EQUIPMENTS = [
  { key: 'shredder', label: 'Shredder Powered On' },
  { key: 'compactor', label: 'Compactor Powered On' },
  { key: 'conveyor', label: 'Conveyor Powered On' },
];

export default function EquipmentChecklistCard() {
  return (
    <Section title='Equipment Checklist'>
      <Surface className='gap-3 rounded-2xl'>
        {EQUIPMENTS.map(({ key, label }) => (
          <EquipmentChecklistItem key={key} label={label} />
        ))}
      </Surface>
    </Section>
  );
}
