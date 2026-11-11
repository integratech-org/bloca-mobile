import { BatchItem } from '@/features/onboarding/types';
import { Typography } from 'heroui-native';
import { View } from 'react-native';
import { useCSSVariable } from 'uniwind';

interface Props {
  item: BatchItem;
}

export function BatchListItem({ item }: Props) {
  const [accentFg] = useCSSVariable(['--color-accent-foreground']) as string[];

  return (
    <View className='flex-row items-center gap-3'>
      <View className='bg-accent size-10 shrink-0 items-center justify-center rounded-full'>
        <item.icon size={20} color={accentFg} />
      </View>
      <Typography.Paragraph type='body-sm' className='flex-1'>
        {item.text}
      </Typography.Paragraph>
    </View>
  );
}
