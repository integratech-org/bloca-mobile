import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
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

export function SignInForm() {
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
              <StyledMaterialDesignIcons name='email-outline' size={18} />
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
              <StyledMaterialDesignIcons name='lock-outline' size={18} />
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
                <StyledMaterialDesignIcons
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={18}
                />
              </Pressable>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
      </View>

      {/* Forgot Password Link */}
      <LinkButton
        onPress={() => router.push('/(auth)/forgot-password')}
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
