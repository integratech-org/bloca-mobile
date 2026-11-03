import { Typography } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  title: string;
  description?: string;
}

export function ScreenHeading({ title, description }: Props) {
  return (
    <View className='gap-1'>
      <Typography.Heading type='h2'>{title}</Typography.Heading>
      {description ? (
        <Typography.Paragraph type='body'>{description}</Typography.Paragraph>
      ) : null}
    </View>
  );
}
