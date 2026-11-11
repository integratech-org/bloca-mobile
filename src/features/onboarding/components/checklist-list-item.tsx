import { Button, Checkbox, Typography } from 'heroui-native';
import { ChecklistItem } from '../types';
import { View } from 'react-native';
import { useCSSVariable } from 'uniwind';

interface Props {
  item: ChecklistItem;
  checked: boolean;
  onToggle: () => void;
}

export function ChecklistListItem({ item, checked, onToggle }: Props) {
  const [accentFg] = useCSSVariable(['--color-accent-foreground']) as string[];

  return (
    <Button
      variant='outline'
      onPress={onToggle}
      className={`h-auto flex-row items-center justify-start gap-3 rounded-2xl px-4 py-3 ${
        checked ? 'border-accent bg-accent/10' : 'border-border bg-background'
      }`}
    >
      <View className='bg-accent size-12 shrink-0 items-center justify-center rounded-full'>
        <item.icon size={24} color={accentFg} />
      </View>

      {/* text */}
      <View className='flex-1'>
        <Typography.Heading type='h6'>{item.title}</Typography.Heading>
        <Typography.Paragraph type='body-xs'>
          {item.description}
        </Typography.Paragraph>
      </View>

      <View pointerEvents='none'>
        <Checkbox
          isSelected={checked}
          onSelectedChange={onToggle}
          className='size-7 rounded-full'
        />
      </View>
    </Button>
  );
}
