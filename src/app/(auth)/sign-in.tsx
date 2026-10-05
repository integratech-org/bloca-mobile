import { Screen } from '@/components/screen';
import { SignInForm } from '@/features/auth/components/forms/sign-in-form';
import { Image } from 'expo-image';
import { Alert, Typography } from 'heroui-native';
import { ScrollView, View } from 'react-native';

export default function SignInScreen() {
  return (
    <Screen>
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        <View className='px-6 pt-8'>
          {/* Logo Screen */}
          <View className='mb-4 items-center'>
            <Image
              source={require('@/assets/splash/bloca-splash-icon.svg')}
              style={{ width: 80, height: 80, marginBottom: 16, marginTop: 16 }}
              contentFit='contain'
            />
            <Typography.Heading className='text-accent'>
              BLOCA
            </Typography.Heading>
          </View>

          {/* Description */}
          <View className='mb-8 px-4'>
            <Typography.Paragraph className='text-center'>
              Sign in with the account your admin set up for you.
            </Typography.Paragraph>
          </View>

          <View className='gap-4'>
            {/* Sign in Form */}
            <SignInForm />
          </View>

          {/* Information */}
          <View>
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
      </ScrollView>
    </Screen>
  );
}
