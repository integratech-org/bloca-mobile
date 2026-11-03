import { Screen } from '@/components/screen';
import { StyledImage } from '@/components/styled-image';
import { SignInForm } from '@/features/auth/components/forms/sign-in-form';
import { Alert, Typography } from 'heroui-native';
import { View } from 'react-native';

export default function SignInScreen() {
  return (
    <Screen edges={['top', 'bottom']}>
      <View className='flex-1 gap-6 p-4'>
        <View className='items-center gap-8'>
          <View className='items-center gap-2'>
            <StyledImage
              source={require('@/assets/images/logo.svg')}
              contentFit='contain'
              className='size-20'
            />
            <Typography.Heading
              type='h1'
              className='text-accent text-4xl font-bold tracking-wide uppercase'
            >
              BLOCA
            </Typography.Heading>
          </View>
          <Typography.Paragraph
            type='body'
            className='text-center text-xl font-medium'
          >
            Sign in with the account your admin set up for you.
          </Typography.Paragraph>
        </View>

        <View className='flex-1 gap-2'>
          <SignInForm />

          <Alert status='danger' className='mt-auto rounded-2xl'>
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Description className='text-xs'>
                No self sign-up. New operator accounts are created by an Admin
                or System Admin.
              </Alert.Description>
            </Alert.Content>
          </Alert>
        </View>
      </View>
    </Screen>
  );
}
