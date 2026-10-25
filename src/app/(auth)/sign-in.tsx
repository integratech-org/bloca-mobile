import { Screen } from '@/components/screen';
import { SignInForm } from '@/features/auth/components/forms/sign-in-form';
import { Image } from 'expo-image';
import { Alert, Typography } from 'heroui-native';
import { ScrollView, View } from 'react-native';

export default function SignInScreen() {
  return (
    <Screen edges={['bottom']}>
      <View className='bg-background flex-1'>
        {/* Scrollable content area */}
        <ScrollView
          className='flex-1'
          contentContainerClassName='px-6 pt-8'
          showsVerticalScrollIndicator={false}
        >
          {/* Logo Screen */}
          <View className='items-center'>
            <Image
              source={require('@/assets/images/bloca-icon.svg')}
              style={{ width: 80, height: 80, marginBottom: 16, marginTop: 16 }}
              contentFit='contain'
            />
            <Typography.Heading className='text-accent'>
              BLOCA
            </Typography.Heading>
          </View>

          {/* Description */}
          <View>
            <Typography.Paragraph className='text-center'>
              Sign in with the account your admin set up for you.
            </Typography.Paragraph>
          </View>

          <View>
            {/* Sign in Form (without button) */}
            <SignInForm />
          </View>
        </ScrollView>

        {/* Fixed button section at bottom */}
        <View className='gap-4 px-6 pb-4'>
          <Alert status='warning' className='bg-[#FFBC9D]/50'>
            <Alert.Indicator />
            <Alert.Content>
              <Typography.Paragraph type='body-xs' className='text-muted'>
                No self sign-up. Operator accounts are created by the Admins
              </Typography.Paragraph>
            </Alert.Content>
          </Alert>
        </View>
      </View>
    </Screen>
  );
}
