import { InputGroup, Label, TextField, Typography } from 'heroui-native';
import { EnvelopeSimpleIcon } from 'phosphor-react-native/src/icons/EnvelopeSimple';
import { useCSSVariable } from 'uniwind';

export function ForgotPasswordForm() {
  const [fg] = useCSSVariable(['--color-foreground']) as string[];

  return (
    <TextField>
      <Label>
        <Typography.Paragraph type='body-xs'>Email</Typography.Paragraph>
      </Label>
      <InputGroup>
        <InputGroup.Prefix isDecorative>
          <EnvelopeSimpleIcon size={18} color={fg} />
        </InputGroup.Prefix>
        <InputGroup.Input placeholder='Enter email' className='rounded-2xl' />
      </InputGroup>
    </TextField>
  );
}
