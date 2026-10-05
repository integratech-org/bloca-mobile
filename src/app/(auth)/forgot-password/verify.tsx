import { Screen } from '@/components/screen';
import { router } from 'expo-router';
import { Button, InputOTP, LinkButton, Typography } from 'heroui-native';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ForgotPasswordVerifyScreen() {
  return (
    <Screen>
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        <View className='p-4'>
          {/* Title and Subtitle */}
          <View className='mb-6'>
            <Typography.Heading>Enter the Code</Typography.Heading>

            <Typography type='body'>
              {/* To Do : Implement UI to get the inputted email in the forgot password screen */}
              {/* For now : placeholder */}
              We sent a 4-digit code to o***d@bloca.ph.
            </Typography>
          </View>

          {/* Input OTP */}
          <View className='mt-10 px-6'>
            <InputOTP maxLength={6} placeholder='xxxxxx'>
              <InputOTP.Group>
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
                <InputOTP.Slot index={3} />
                <InputOTP.Slot index={4} />
                <InputOTP.Slot index={5} />
              </InputOTP.Group>
            </InputOTP>
          </View>

          {/* Resend Count down timer */}
          <View className='mt-2 self-center'>
            <LinkButton>
              <LinkButton.Label>
                <Typography.Paragraph type='body-xs'>
                  {/* To do : implement timer */}
                  Resend Code in --:--
                </Typography.Paragraph>
              </LinkButton.Label>
            </LinkButton>
          </View>

          {/* Verify Button */}
          <View className='mt-20'>
            <Button onPress={() => router.push('/forgot-password/reset')}>
              Verify
            </Button>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
