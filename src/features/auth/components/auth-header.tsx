import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Button, Typography } from 'heroui-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function AuthHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className='flex-row items-center justify-between px-4'
      style={{ paddingTop: insets.top }}
    >
      <Button isIconOnly variant='ghost' onPress={() => router.back()}>
        <StyledMaterialDesignIcons name='chevron-left' size={42} />
      </Button>

      <View className='flex-row items-center'>
        <Image
          source={require('@/assets/images/bloca-icon.svg')}
          style={{ width: 42, height: 42 }}
          contentFit='contain'
        />
        <Typography.Heading className='text-accent'> BLOCA </Typography.Heading>
      </View>

      {/* Spacer to keep logo centered */}
      <View style={{ width: 42 }} />
    </View>
  );
}
