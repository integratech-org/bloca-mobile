import { Screen } from '@/components/screen';
import { Button, Input, Label, TextField, Typography } from 'heroui-native';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

export default function ChangeContactScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <Screen edges={['left', 'right', 'bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className='flex-1'
      >
        <View className='flex-1 justify-between p-4'>
          {/* Form content */}
          <View className='gap-4'>
            {/* Description */}
            <Typography.Paragraph className='text-muted'>
              Current number: +63 9&bull;&bull; &bull;&bull;&bull;
              &bull;&bull;34. We&apos;ll text a 6-digit code to the new number
              to confirm it.
            </Typography.Paragraph>

            {/* Phone number input */}
            <TextField>
              <Label>
                <Typography.Paragraph type='body-xs'>
                  New mobile number
                </Typography.Paragraph>
              </Label>
              <View className='flex-row gap-2'>
                {/* Country code display box */}
                <View className='bg-default items-center justify-center rounded-2xl px-4'>
                  <Typography.Paragraph className='text-foreground'>
                    +63
                  </Typography.Paragraph>
                </View>
                {/* Phone number input */}
                <Input
                  placeholder='9XX XXX XXXX'
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  keyboardType='phone-pad'
                  autoComplete='tel'
                  textContentType='telephoneNumber'
                  maxLength={13}
                  className='flex-1 rounded-2xl'
                />
              </View>
            </TextField>
          </View>

          {/* Bottom button */}
          <View className='pb-2'>
            <Button className='rounded-2xl' onPress={() => {}}>
              <Button.Label>Send verification code</Button.Label>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
