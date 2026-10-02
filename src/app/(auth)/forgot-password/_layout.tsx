import { Screen } from '@/components/screen';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Image } from 'expo-image';
import { Slot, useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export const unstable_settings = {
  anchor: 'index',
};

export default function ForgotPasswordLayout() {
  const router = useRouter();

  // added back handler for pressable chevron button
  const handleBack = () => {
    router.back();
  };

  return (
    <Screen edges={['top', 'left', 'right', 'bottom']}>
      <View className='flex-1 px-6 pt-4'>
        {/* Shared Header */}
        <View className='relative mb-8 flex-row items-center justify-center'>
          {/* Back button - absolute left */}
          <Pressable onPress={handleBack} className='absolute left-0'>
            <MaterialDesignIcons
              name='chevron-left'
              size={28}
              color='#000000'
            />
          </Pressable>

          {/* Logo + Title - centered */}
          <View className='flex-row items-center'>
            <Image
              source={require('@/assets/splash/bloca-splash-icon.png')}
              style={{ width: 32, height: 32 }}
              contentFit='contain'
            />
            <Text
              style={{
                fontFamily: 'Inter_700Bold',
                fontSize: 24,
                color: '#C45A27',
                marginLeft: 8,
              }}
            >
              BLOCA
            </Text>
          </View>
        </View>

        {/* Content for each screen */}
        <View>
          <Slot />
        </View>
      </View>
    </Screen>
  );
}
