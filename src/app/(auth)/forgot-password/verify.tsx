import { useRouter } from 'expo-router';
import { Button, InputOTP, LinkButton, Typography } from 'heroui-native';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ForgotPasswordVerifyScreen() {
  const router = useRouter();

  // Added handling of reset page
  const handleResetPage = () => {
    // TODO : implement verification of OTP
    router.push('/forgot-password/reset');
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className='flex-1'>
        {/* Title and Subtitle */}
        <View className='mb-6'>
          <Typography.Heading
            style={{
              fontFamily: 'Inter_700Bold',
              fontSize: 32,
            }}
            type='h1'
          >
            Enter the Code
          </Typography.Heading>

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
              <InputOTP.Slot index={0} style={{ flex: 1, maxWidth: 48 }} />
              <InputOTP.Slot index={1} style={{ flex: 1, maxWidth: 48 }} />
              <InputOTP.Slot index={2} style={{ flex: 1, maxWidth: 48 }} />
              <InputOTP.Slot index={3} style={{ flex: 1, maxWidth: 48 }} />
            </InputOTP.Group>
          </InputOTP>
        </View>

        {/* Resend Count down timer */}
        <View className='mt-2 self-center'>
          <LinkButton>
            <LinkButton.Label>
              <Text
                style={{
                  fontFamily: 'Inter_500Medium',
                  fontSize: 12,
                  color: '#C45A27',
                }}
              >
                {/* To do : implement timer */}
                Resend Code in --:--
              </Text>
            </LinkButton.Label>
          </LinkButton>
        </View>

        {/* Verify Button */}
        <View className='mt-20'>
          <Button onPress={handleResetPage}>
            <Button.Label
              style={{ fontFamily: 'Inter_600SemiBold', fontSize: 16 }}
            >
              Verify
            </Button.Label>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
