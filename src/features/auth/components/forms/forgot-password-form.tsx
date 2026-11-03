import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { InputGroup, Label, TextField, Typography } from 'heroui-native';

export function ForgotPasswordForm() {
  return (
    <TextField>
      <Label>
        <Typography.Paragraph type='body-xs'>Email</Typography.Paragraph>
      </Label>
      <InputGroup>
        <InputGroup.Prefix isDecorative>
          <StyledMaterialDesignIcons name='email-outline' size={18} />
        </InputGroup.Prefix>
        <InputGroup.Input placeholder='Enter email' className='rounded-2xl' />
      </InputGroup>
    </TextField>
  );
}
