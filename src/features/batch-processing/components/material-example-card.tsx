import { View } from 'react-native';
import { ImageSource } from 'expo-image';
import { Typography } from 'heroui-native';
import { StyledImage } from '@/components/styled-image';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  label: string;
  image: ImageSource;
}

export default function MaterialExampleCard({ label, image }: Props) {
  return (
    <View className='size-32 overflow-hidden rounded-lg'>
      <StyledImage
        source={image}
        contentFit='cover'
        transition={300}
        className='h-full w-full'
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        className='absolute inset-x-0 bottom-0 h-24 justify-end px-2 pb-2'
      >
        <Typography.Paragraph type='body-xs'>{label}</Typography.Paragraph>
      </LinearGradient>
    </View>
  );
}
