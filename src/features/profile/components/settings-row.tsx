import { Button, Typography } from 'heroui-native';
import type { Icon } from 'phosphor-react-native';
import { CaretRightIcon } from 'phosphor-react-native/src/icons/CaretRight';
import { View } from 'react-native';
import { useCSSVariable } from 'uniwind';

export interface SettingsRowProps {
  icon: Icon;
  label: string;
  value?: string;
  onPress?: () => void;
}

export default function SettingsRow({
  icon: Icon,
  label,
  value,
  onPress,
}: SettingsRowProps) {
  const [fg, muted] = useCSSVariable([
    '--color-foreground',
    '--color-muted',
  ]) as string[];

  return (
    <Button variant='ghost' onPress={onPress} className='rounded-lg'>
      <View className='w-full flex-row items-center justify-between gap-3'>
        {/*left*/}
        <View className='shrink-0 flex-row items-center gap-3'>
          <Icon size={18} color={fg} />

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
          <CaretRightIcon size={14} weight='bold' color={muted} />
        </View>
      </View>
    </Button>
  );
}
