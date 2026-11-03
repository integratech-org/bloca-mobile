import { StyledImage } from '@/components/styled-image';
import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { router } from 'expo-router';
import { Button, Typography } from 'heroui-native';
import { View } from 'react-native';

export function AuthHeader() {
  return (
    <View className='relative flex-row items-center justify-center gap-4'>
      <Button
        variant='ghost'
        isIconOnly
        onPress={() => router.back()}
        className='absolute left-0'
      >
        <StyledMaterialDesignIcons name='chevron-left' size={28} />
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
