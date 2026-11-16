import { View } from 'react-native';
import { router } from 'expo-router';
import {
  Button,
  InputGroup,
  Label,
  Separator,
  TextField,
  Typography,
} from 'heroui-native';

export function ChangeContactForm() {
  return (
    <View className='flex-1 gap-4'>
      <TextField>
        <Label>
          <Typography.Paragraph type='body-xs'>
            New mobile number
          </Typography.Paragraph>
        </Label>
        <InputGroup>
          <InputGroup.Prefix isDecorative className='flex-row'>
            <Typography.Paragraph type='body-sm' className='text-muted'>
              +63
            </Typography.Paragraph>
            <Separator orientation='vertical' className='h-5' thickness={1} />
          </InputGroup.Prefix>
          <InputGroup.Input
            placeholder='9XX XXX XXXX'
            className='rounded-2xl'
          />
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
