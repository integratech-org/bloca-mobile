import { Typography } from 'heroui-native';
import { View } from 'react-native';

export function LegendItem({
  color,
  label,
  percent,
}: {
  color: string;
  label: string;
  percent: number;
}) {
  return (
    <View className='flex-row items-center gap-2'>
      <View
        className='h-2 w-2 rounded-full'
        style={{ backgroundColor: color }}
      />
      <View className='flex-row gap-1 text-xs'>
        <Typography.Paragraph type='body-xs'>{label}</Typography.Paragraph>
        <Typography.Paragraph type='body-xs' className='text-muted'>
          {percent}%
        </Typography.Paragraph>
      </View>
    </View>
  );
}
