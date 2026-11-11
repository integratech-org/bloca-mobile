import { Typography } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  title?: string;
  description?: string;
}

export function ScreenHeading({ title, description }: Props) {
  return (
    <View className='gap-1'>
      {title ? (
        <Typography.Heading type='h3'>{title}</Typography.Heading>
      ) : null}
      {description ? (
        <Typography.Paragraph type='body-sm'>
          {description}
        </Typography.Paragraph>
      ) : null}
    </View>
  );
}
