import { StyledImage } from '@/components/styled-image';
import { router } from 'expo-router';
import { Button, Typography } from 'heroui-native';
import { CaretLeftIcon } from 'phosphor-react-native/src/icons/CaretLeft';
import { View } from 'react-native';
import { useCSSVariable } from 'uniwind';

export function AuthHeader() {
  const [fg] = useCSSVariable(['--color-foreground']) as string[];

  return (
    <View className='relative flex-row items-center justify-center gap-4'>
      <Button
        variant='ghost'
        isIconOnly
        onPress={() => router.back()}
        className='absolute left-0'
      >
        <CaretLeftIcon size={28} color={fg} />
      </Button>

      <View className='flex-row items-center gap-2'>
        <StyledImage
          source={require('@/assets/images/logo.svg')}
          contentFit='contain'
          className='size-10'
        />
        <Typography.Heading
          type='h1'
          className='text-accent font-bold tracking-wide uppercase'
        >
          BLOCA
        </Typography.Heading>
      </View>
    </View>
  );
}
