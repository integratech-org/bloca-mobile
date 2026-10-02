import { Typography } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  title: string;
  trailing?: string;
  children: React.ReactNode;
}

export function Section({ title, trailing, children }: Props) {
  return (
    <View className='gap-2'>
      <View className='flex-row items-center justify-between px-1'>
        <Typography.Paragraph
          type='body-xs'
          className='text-muted font-medium uppercase'
        >
          {title}
        </Typography.Paragraph>
        {trailing && (
          <Typography.Paragraph type='body-xs' className='text-muted'>
            {trailing}
          </Typography.Paragraph>
        )}
      </View>

      {children}
    </View>
  );
}
