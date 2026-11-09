import { Screen } from '@/components/screen';
import { router } from 'expo-router';
import { Button, Input, Label, TextField, Typography } from 'heroui-native';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

export default function ChangeEmailScreen() {
  const [email, setEmail] = useState('');

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
              Current email: a•••@company.com. We&apos;ll send a 6-digit code to
              the new address to confirm it.
            </Typography.Paragraph>

            {/* Email input */}
            <TextField>
              <Label>
                <Typography.Paragraph type='body-xs'>
                  New email address
                </Typography.Paragraph>
              </Label>
              <Input
                placeholder='name@company.com'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
                textContentType='emailAddress'
                className='rounded-2xl'
              />
            </TextField>
          </View>

          {/* Bottom button */}
          <View className='pb-2'>
            <Button
              className='rounded-2xl'
              onPress={() => {
                router.push('/(app)/settings/verify-email');
              }}
            >
              <Button.Label>Send verification code</Button.Label>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
