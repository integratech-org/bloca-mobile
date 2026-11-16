import { View } from 'react-native';
import {
  Button,
  InputGroup,
  Label,
  TextField,
  Typography,
} from 'heroui-native';
import { EnvelopeSimpleIcon } from 'phosphor-react-native/src/icons/EnvelopeSimple';
import { useCSSVariable } from 'uniwind';
import { router } from 'expo-router';

export function ChangeEmailForm() {
  const [fg] = useCSSVariable(['--color-foreground']) as string[];

  return (
    <View className='flex-1 gap-4'>
      <TextField>
        <Label>
          <Typography.Paragraph type='body-xs'>
            New email address
          </Typography.Paragraph>
        </Label>
        <InputGroup>
          <InputGroup.Prefix isDecorative>
            <EnvelopeSimpleIcon size={18} color={fg} />
          </InputGroup.Prefix>
          <InputGroup.Input placeholder='Enter email' className='rounded-2xl' />
        </InputGroup>
      </TextField>

      <Button
        className='mt-auto rounded-2xl'
        onPress={() => {
          router.push('/(app)/settings/verify-email');
        }}
      >
        <Button.Label>Send verification code</Button.Label>
      </Button>
    </View>
  );
}
