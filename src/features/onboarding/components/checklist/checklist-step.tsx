import { checklistItems } from '@/features/onboarding/constants';
import { Typography } from 'heroui-native';
import { useState } from 'react';
import { View } from 'react-native';
import { ChecklistRow } from './checklist-row';

interface Props {
  onAllChecked?: (allChecked: boolean) => void;
}

export function ChecklistStep({ onAllChecked }: Props) {
  const [doneIds, setDoneIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setDoneIds((prev) => {
      const newDoneIds = prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id];

      // Notify parent if all are checked
      const allChecked = newDoneIds.length === checklistItems.length;
      onAllChecked?.(allChecked);

      return newDoneIds;
    });
  };

  return (
    <View className='flex-1 px-4'>
      <View className='px-4'>
        <Typography.Heading type='h2'>Sign-off Checklist</Typography.Heading>
      </View>

      <View className='mt-2 px-4'>
        <Typography.Paragraph type='body'>
          Check these if your ready to go
        </Typography.Paragraph>
      </View>

      <View className='items-center justify-center gap-6 p-4'>
        {checklistItems.map((item) => (
          <ChecklistRow
            key={item.id}
            item={item}
            done={doneIds.includes(item.id)}
            onPress={() => toggle(item.id)}
          />
        ))}
      </View>
    </View>
  );
}
