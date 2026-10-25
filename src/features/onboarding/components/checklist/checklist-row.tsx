import type { ChecklistItem } from '@/features/onboarding/types';
import StyledMaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Button, Typography } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  item: ChecklistItem;
  done: boolean;
  onPress: () => void;
}

export function ChecklistRow({ item, done, onPress }: Props) {
  return (
    <View className='flex-row items-center gap-5'>
      {/* left icon circle */}
      <View className='h-16 w-16 items-center justify-center rounded-full bg-[#B85C38]'>
        <StyledMaterialDesignIcons name={item.icon} size={28} color='white' />
      </View>

      {/* text */}
      <View className='flex-1'>
        <Typography.Heading type='h6'>{item.title}</Typography.Heading>
        <Typography.Paragraph type='body-xs'>
          {item.description}
        </Typography.Paragraph>
      </View>

      {/* right circle button: chevron when pending, check when done */}
      <Button
        variant='ghost'
        onPress={onPress}
        className={`h-16 w-16 items-center justify-center rounded-full border ${
          done ? 'border-green-500 bg-green-200' : 'border-neutral-400'
        }`}
      >
        <StyledMaterialDesignIcons
          name={done ? 'check' : 'chevron-right'}
          size={28}
          color='black'
        />
      </Button>
    </View>
  );
}
