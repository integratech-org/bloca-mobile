import { StyledImage } from '@/components/styled-image';
import { Typography } from 'heroui-native';
import { View } from 'react-native';
import { checklistItems } from '../constants';
import { ChecklistListItem } from './checklist-list-item';
import { useState } from 'react';

interface Props {
  onChecklistChange?: (done: boolean) => void;
}

export function ChecklistSlide({ onChecklistChange }: Props) {
  const [checked, setChecked] = useState(() => checklistItems.map(() => false));

  const toggle = (i: number) => {
    const next = checked.map((v, j) => (i === j ? !v : v));
    setChecked(next);
    onChecklistChange?.(next.every((v) => v));
  };

  return (
    <View className='flex-1'>
      <View className='gap-2'>
        <Typography.Heading type='h1'>Sign-off Checklist</Typography.Heading>

        <Typography.Paragraph type='body'>
          Check these if your ready to go
        </Typography.Paragraph>
      </View>

      <View className='mt-6 gap-4'>
        {checklistItems.map((item, i) => (
          <ChecklistListItem
            key={item.title}
            item={item}
            checked={checked[i]}
            onToggle={() => toggle(i)}
          />
        ))}
      </View>

      <StyledImage
        source={require('@/features/onboarding/assets/man-with-clipboard.svg')}
        contentFit='contain'
        className='w-full flex-1'
      />
    </View>
  );
}
