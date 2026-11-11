import {
  Button,
  InputGroup,
  Label,
  TextField,
  Typography,
} from 'heroui-native';
import { LockIcon } from 'phosphor-react-native/src/icons/Lock';
import { EyeIcon } from 'phosphor-react-native/src/icons/Eye';
import { EyeSlashIcon } from 'phosphor-react-native/src/icons/EyeSlash';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { useCSSVariable } from 'uniwind';

export function ResetPasswordForm() {
  const [fg] = useCSSVariable(['--color-foreground']) as string[];

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View className='flex-1 gap-4'>
      {/* New Password Input */}
      <TextField>
        <Label>
          <Typography.Paragraph type='body-xs'>
            New password
          </Typography.Paragraph>
        </Label>
        <InputGroup>
          <InputGroup.Prefix isDecorative>
            <LockIcon size={18} color={fg} />
          </InputGroup.Prefix>
          <InputGroup.Input
            placeholder='Enter new password'
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

      {/* Confirm Password Input */}
      <TextField>
        <Label>
          <Typography.Paragraph type='body-xs'>
            Confirm password
          </Typography.Paragraph>
        </Label>
        <InputGroup>
          <InputGroup.Prefix isDecorative>
            <LockIcon size={18} color={fg} />
          </InputGroup.Prefix>
          <InputGroup.Input
            placeholder='Enter confirm password'
            secureTextEntry={!showConfirmPassword}
            className='rounded-2xl'
          />
          <InputGroup.Suffix>
            <Pressable
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              hitSlop={8}
            >
              {showConfirmPassword ? (
                <EyeIcon size={18} color={fg} />
              ) : (
                <EyeSlashIcon size={18} color={fg} />
              )}
            </Pressable>
          </InputGroup.Suffix>
        </InputGroup>
      </TextField>

      <Button className='mt-auto rounded-2xl'>Reset password</Button>
    </View>
  );
}
