import { Screen } from '@/components/screen';
import { Button, InputOTP, Typography, cn } from 'heroui-native';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';

export default function VerifyEmailScreen() {
  const [code, setCode] = useState('');

  return (
    <Screen edges={['left', 'right', 'bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className='flex-1'
      >
        <View className='flex-1 justify-between p-4'>
          {/* Top content */}
          <View className='gap-6'>
            {/* Heading and description */}
            <View className='gap-2'>
              <Typography.Heading type='h2' className='font-bold'>
                Enter the 6-digit code
              </Typography.Heading>
              <Typography.Paragraph className='text-muted'>
                We sent a code to n&bull;&bull;&bull;@company.com. It expires in
                10 minutes.
              </Typography.Paragraph>
            </View>

            {/* OTP input and resend text */}
            <View className='gap-4'>
              <InputOTP
                maxLength={6}
                value={code}
                onChange={setCode}
                className='w-full'
                textInputProps={{
                  autoFocus: true,
                  keyboardType: 'number-pad',
                  autoComplete: 'sms-otp',
                  textContentType: 'oneTimeCode',
                }}
              >
                <InputOTP.Group className='w-full flex-row justify-between gap-2'>
                  {({ slots, isFocused }) =>
                    slots.map((slot, index) => {
                      const isActive =
                        (isFocused && slot.isActive) ||
                        (!isFocused && code.length === 0 && index === 0);

                      return (
                        <InputOTP.Slot
                          key={index}
                          index={index}
                          className={cn(
                            'h-14 flex-1 rounded-2xl border-2',
                            isActive ? 'border-accent' : 'border-transparent',
                          )}
                        />
                      );
                    })
                  }
                </InputOTP.Group>
              </InputOTP>

              {/* Resend text */}
              <Typography.Paragraph
                type='body-xs'
                className='text-muted text-center'
              >
                Didn&apos;t get it? Resend code in{' '}
                <Text className='text-foreground font-semibold'>0:42</Text>
              </Typography.Paragraph>
            </View>
          </View>

          {/* Bottom button */}
          <View className='pb-2'>
            <Button
              isDisabled={code.length < 6}
              className='rounded-2xl'
              onPress={() => {}}
            >
              <Button.Label>Verify</Button.Label>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
