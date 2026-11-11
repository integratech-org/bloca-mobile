import { router } from 'expo-router';
import {
  Button,
  InputGroup,
  Label,
  LinkButton,
  TextField,
  Typography,
} from 'heroui-native';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { EnvelopeSimpleIcon } from 'phosphor-react-native/src/icons/EnvelopeSimple';
import { LockIcon } from 'phosphor-react-native/src/icons/Lock';
import { EyeIcon } from 'phosphor-react-native/src/icons/Eye';
import { EyeSlashIcon } from 'phosphor-react-native/src/icons/EyeSlash';
import { useCSSVariable } from 'uniwind';

export function SignInForm() {
  const [fg] = useCSSVariable(['--color-foreground']) as string[];
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className='flex-1'>
      <View className='gap-4'>
        {/* Email Field */}
        <TextField>
          <Label>
            <Typography.Paragraph type='body-xs'>Email</Typography.Paragraph>
          </Label>
          <InputGroup>
            <InputGroup.Prefix isDecorative>
              <EnvelopeSimpleIcon size={18} color={fg} />
            </InputGroup.Prefix>
            <InputGroup.Input
              placeholder='Enter email'
              className='rounded-2xl'
            />
          </InputGroup>
        </TextField>

        {/* Password */}
        <TextField>
          <Label>
            <Typography.Paragraph type='body-xs'>Password</Typography.Paragraph>
          </Label>
          <InputGroup>
            <InputGroup.Prefix isDecorative>
              <LockIcon size={18} color={fg} />
            </InputGroup.Prefix>
            <InputGroup.Input
              placeholder='Enter password'
              secureTextEntry={!showPassword}
              className='rounded-2xl'
            />
            <InputGroup.Suffix>
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                hitSlop={8}
              >
                {showPassword ? (
                  <EyeIcon size={18} color={fg} />
                ) : (
                  <EyeSlashIcon size={18} color={fg} />
                )}
              </Pressable>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
      </View>

      {/* Forgot Password Link */}
      <LinkButton
        onPress={() => router.push('/auth/forgot-password')}
        className='mt-2 self-end'
      >
        <LinkButton.Label>
          <Typography.Paragraph className='text-accent' type='body-xs'>
            Forgot password?
          </Typography.Paragraph>
        </LinkButton.Label>
      </LinkButton>

      {/* Login Button*/}
      <Button
        onPress={() => {
          router.push('/(app)/(tabs)/(dashboard)');
        }}
        className='mt-auto rounded-2xl'
      >
        Sign in
      </Button>
    </View>
  );
}
