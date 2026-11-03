import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import {
  Button,
  InputGroup,
  Label,
  TextField,
  Typography,
} from 'heroui-native';
import { useState } from 'react';
import { Pressable, View } from 'react-native';

export function ResetPasswordForm() {
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
            <StyledMaterialDesignIcons name='lock-outline' size={18} />
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
              <StyledMaterialDesignIcons
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                size={18}
              />
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
            <StyledMaterialDesignIcons name='lock-outline' size={18} />
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
              <StyledMaterialDesignIcons
                name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
                size={18}
              />
            </Pressable>
          </InputGroup.Suffix>
        </InputGroup>
      </TextField>

      <Button className='mt-auto rounded-2xl'>Reset password</Button>
    </View>
  );
}
