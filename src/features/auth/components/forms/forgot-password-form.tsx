import StyledMaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { InputGroup, Label, TextField, Typography } from 'heroui-native';

export function ForgotPasswordForm() {
  return (
    <TextField>
      {/* Label */}
      <Label>
        <Typography.Paragraph type='body-xs'>Email</Typography.Paragraph>
      </Label>
      {/* Input */}
      <InputGroup>
        <InputGroup.Prefix isDecorative>
          <StyledMaterialDesignIcons name={'email-outline'} size={18} />
        </InputGroup.Prefix>
        <InputGroup.Input placeholder='Enter Email' />
      </InputGroup>
    </TextField>
  );
}
