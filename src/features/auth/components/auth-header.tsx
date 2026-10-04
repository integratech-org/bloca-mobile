import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Typography } from 'heroui-native';
import { Pressable, View } from 'react-native';

export function AuthHeader() {
  const router = useRouter();

  return (
    <View className='relative mt-4 mb-8 flex-row items-center justify-center'>
      <Pressable onPress={() => router.back()} className='absolute left-0 p-4'>
        <MaterialDesignIcons name='chevron-left' size={42} color='#000000' />
      </Pressable>

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
