import { Typography } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  step: number;
  title: string;
  description: string;
}

export default function InstructionStep({ step, title, description }: Props) {
  return (
    <View className='flex-row gap-3'>
      <View className='bg-default size-6 items-center justify-center rounded-full'>
        <Typography.Paragraph
          type='body-xs'
          className='text-muted font-semibold'
        >
          {step}
        </Typography.Paragraph>
      </View>

      <View className='flex-1'>
        <Typography.Paragraph type='body-sm' className='font-semibold'>
          {title}
        </Typography.Paragraph>
        <Typography.Paragraph type='body-sm' className='text-muted'>
          {description}
        </Typography.Paragraph>
      </View>
    </View>
  );
}
