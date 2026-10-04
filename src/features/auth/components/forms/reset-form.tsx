import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import {
  Button,
  InputGroup,
  Label,
  TextField,
  Typography,
} from 'heroui-native';
import { View } from 'react-native';

export function ResetForm() {
  return (
    <View className='gap-4'>
      {/* New Password Input */}
      <TextField>
        {/* Label */}
        <Label>
          <Typography.Paragraph type='body-xs'>
            New Password
          </Typography.Paragraph>
        </Label>
        {/* Input */}
        <InputGroup>
          <InputGroup.Prefix isDecorative>
            <MaterialDesignIcons name={'lock-outline'} size={18} />
          </InputGroup.Prefix>
          <InputGroup.Input placeholder='Enter New Password' secureTextEntry />
        </InputGroup>
      </TextField>

      {/* Confirm Password Input */}
      <TextField>
        {/* Label */}
        <Label>
          <Typography.Paragraph type='body-xs'>
            Confirm Password
          </Typography.Paragraph>
        </Label>
        {/* Input */}
        <InputGroup>
          <InputGroup.Prefix isDecorative>
            <MaterialDesignIcons name={'lock-outline'} size={18} />
          </InputGroup.Prefix>
          <InputGroup.Input
            placeholder='Confirm New Password'
            secureTextEntry
          />
        </InputGroup>
      </TextField>

      {/* Reset Button */}
      <View className='mt-20'>
        <Button>Reset Password</Button>
      </View>
    </View>
  );
}
