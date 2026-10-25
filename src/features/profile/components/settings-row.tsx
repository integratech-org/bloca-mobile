import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { MaterialDesignIconsIconName } from '@react-native-vector-icons/material-design-icons';
import { Button, Typography } from 'heroui-native';
import { View } from 'react-native';

export interface SettingsRowProps {
  icon: MaterialDesignIconsIconName;
  label: string;
  value?: string;
  onPress?: () => void;
}

export default function SettingsRow({
  icon,
  label,
  value,
  onPress,
}: SettingsRowProps) {
  return (
    <Button variant='ghost' onPress={onPress} className='rounded-lg'>
      <View className='w-full flex-row items-center justify-between gap-3'>
        {/*left*/}
        <View className='shrink-0 flex-row items-center gap-3'>
          <StyledMaterialDesignIcons
            name={icon}
            size={18}
            className='text-foreground'
          />

          <Typography.Paragraph type='body-xs' numberOfLines={1}>
            {label}
          </Typography.Paragraph>
        </View>

        {/*right*/}
        <View className='flex-1 flex-row items-center justify-end gap-2'>
          {value && (
            <Typography.Paragraph
              type='body-xs'
              numberOfLines={1}
              className='text-muted shrink'
            >
              {value}
            </Typography.Paragraph>
          )}
          <StyledMaterialDesignIcons
            name='chevron-right'
            size={20}
            className='text-muted'
          />
        </View>
      </View>
    </Button>
  );
}
