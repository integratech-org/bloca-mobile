import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import type { SafetyItem } from '@/features/onboarding/types';
import { Typography } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  item: SafetyItem;
}

export function SafetyListItem({ item }: Props) {
  return (
    <View className='flex-row items-center gap-3'>
      <View className='bg-accent flex size-16 shrink-0 items-center justify-center rounded-full'>
        <StyledMaterialDesignIcons
          name={item.icon}
          size={32}
          className='text-accent-foreground'
        />
      </View>
      <Typography.Paragraph type='body' className='flex-1'>
        {item.text}
      </Typography.Paragraph>
    </View>
  );
}
