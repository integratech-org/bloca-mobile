import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Button, Typography } from 'heroui-native';
import { View } from 'react-native';

export function AuthHeader() {
  return (
    <View className='relative mt-10 mb-8 flex-row items-center justify-center'>
      <Button
        isIconOnly
        variant='ghost'
        onPress={() => router.back()}
        className='absolute left-0 ml-4 flex-row items-center justify-center text-center'
      >
        <StyledMaterialDesignIcons name='chevron-left' size={42} />
      </Button>

      <View className='flex-row items-center'>
        <Image
          source={require('@/assets/splash/bloca-splash-icon.png')}
          style={{ width: 42, height: 42 }}
          contentFit='contain'
        />
        <Typography.Heading className='text-accent'> BLOCA </Typography.Heading>
      </View>
    </View>
  );
}
