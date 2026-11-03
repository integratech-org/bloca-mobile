import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { BatchItem } from '@/features/onboarding/types';
import { Typography } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  item: BatchItem;
}

export function BatchListItem({ item }: Props) {
  return (
    <View className='flex-row items-center gap-3'>
      <View className='bg-accent size-10 shrink-0 items-center justify-center rounded-full'>
        <StyledMaterialDesignIcons
          name={item.icon}
          size={20}
          className='text-accent-foreground'
        />
      </View>
      <Typography.Paragraph type='body-sm' className='flex-1'>
        {item.text}
      </Typography.Paragraph>
    </View>
  );
}
