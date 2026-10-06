import { Typography } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  color: string;
  label: string;
  percent?: number;
}

export function LegendItem({ color, label, percent }: Props) {
  return (
    <View className='flex-row items-center gap-2'>
      <View
        className='h-2 w-2 rounded-full'
        style={{ backgroundColor: color }}
      />
      <View className='flex-row gap-1 text-xs'>
        <Typography.Paragraph type='body-xs'>{label}</Typography.Paragraph>
        {percent !== undefined && (
          <Typography.Paragraph type='body-xs' className='text-muted'>
            {percent}%
          </Typography.Paragraph>
        )}
      </View>
    </View>
  );
}
