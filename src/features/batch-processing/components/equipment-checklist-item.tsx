import { Checkbox, ControlField, Label, Surface } from 'heroui-native';
import { useState } from 'react';

interface Props {
  label: string;
}

export default function EquipmentChecklistItem({ label }: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <ControlField isSelected={checked} onSelectedChange={setChecked}>
      <Surface
        variant='secondary'
        className='flex-row items-center rounded-2xl'
      >
        <Label className='flex-1'>{label}</Label>
        <ControlField.Indicator>
          <Checkbox variant='primary' />
        </ControlField.Indicator>
      </Surface>
    </ControlField>
  );
}
