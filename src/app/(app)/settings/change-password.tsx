import { Screen } from '@/components/screen';
import {
  Button,
  InputGroup,
  Label,
  TextField,
  Typography,
} from 'heroui-native';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  type TextInputProps,
  View,
} from 'react-native';

interface PasswordInputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  isVisible: boolean;
  onToggleVisibility: () => void;
  autoComplete?: TextInputProps['autoComplete'];
  textContentType?: TextInputProps['textContentType'];
}

function PasswordInputField({
  label,
  placeholder,
  value,
  onChangeText,
  isVisible,
  onToggleVisibility,
  autoComplete,
  textContentType,
}: PasswordInputFieldProps) {
  return (
    <TextField>
      <Label>
        <Typography.Paragraph type='body-xs'>{label}</Typography.Paragraph>
      </Label>
      <InputGroup>
        <InputGroup.Input
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!isVisible}
          autoCapitalize='none'
          autoCorrect={false}
          autoComplete={autoComplete}
          textContentType={textContentType}
          className='rounded-2xl'
        />
        <InputGroup.Suffix>
          <Pressable onPress={onToggleVisibility} hitSlop={8}>
            {/* <StyledMaterialDesignIcons */}
            {/*   name={isVisible ? 'eye-off-outline' : 'eye-outline'} */}
            {/*   size={20} */}
            {/*   className='text-muted' */}
            {/* /> */}
          </Pressable>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
  );
}

export default function ChangePasswordScreen() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
              Enter your current password first, then choose a new one.
            </Typography.Paragraph>

            {/* Password fields */}
            <PasswordInputField
              label='Current password'
              placeholder='Current password'
              value={currentPassword}
              onChangeText={setCurrentPassword}
              isVisible={showCurrentPassword}
              onToggleVisibility={() => setShowCurrentPassword((prev) => !prev)}
              autoComplete='current-password'
              textContentType='password'
            />

            <PasswordInputField
              label='New password'
              placeholder='New password'
              value={newPassword}
              onChangeText={setNewPassword}
              isVisible={showNewPassword}
              onToggleVisibility={() => setShowNewPassword((prev) => !prev)}
              autoComplete='new-password'
              textContentType='newPassword'
            />

            <PasswordInputField
              label='Confirm new password'
              placeholder='Confirm new password'
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              isVisible={showConfirmPassword}
              onToggleVisibility={() => setShowConfirmPassword((prev) => !prev)}
              autoComplete='new-password'
              textContentType='newPassword'
            />

            {/* Password requirements hint */}
            <View className='gap-0.5'>
              <Typography.Paragraph type='body-xs' className='text-muted'>
                At least 8 characters
              </Typography.Paragraph>
              <Typography.Paragraph type='body-xs' className='text-muted'>
                One uppercase letter and one number
              </Typography.Paragraph>
            </View>
          </View>

          {/* Bottom button */}
          <View className='pb-2'>
            <Button className='rounded-2xl' onPress={() => {}}>
              <Button.Label>Update password</Button.Label>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
