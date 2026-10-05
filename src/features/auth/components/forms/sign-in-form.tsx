import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { router } from 'expo-router';
import {
  Button,
  InputGroup,
  Label,
  LinkButton,
  TextField,
  Typography,
} from 'heroui-native';
import { View } from 'react-native';

export function SignInForm() {
  return (
    <View className='mt-4'>
      <View className='gap-4'>
        {/* Email Field */}
        <TextField>
          <Label>
            <Typography.Paragraph type='body-xs'>Email</Typography.Paragraph>
          </Label>
          <InputGroup>
            <InputGroup.Prefix isDecorative>
              <MaterialDesignIcons name={'email-outline'} size={18} />
            </InputGroup.Prefix>
            <InputGroup.Input placeholder='Enter Email' />
          </InputGroup>
        </TextField>

        {/* Password */}
        <TextField>
          <Label>
            <Typography.Paragraph type='body-xs'>Password</Typography.Paragraph>
          </Label>
          <InputGroup>
            <InputGroup.Prefix isDecorative>
              <MaterialDesignIcons name={'lock-outline'} size={18} />
            </InputGroup.Prefix>
            <InputGroup.Input placeholder='Enter Password' secureTextEntry />
          </InputGroup>
        </TextField>
      </View>

      {/* Forgot Password Link */}
      <View className='mt-2 self-end'>
        <LinkButton onPress={() => router.push('/(auth)/forgot-password')}>
          <LinkButton.Label>
            <Typography.Paragraph className='text-accent' type='body-xs'>
              Forgot Password
            </Typography.Paragraph>
          </LinkButton.Label>
        </LinkButton>
      </View>

      {/* Login Button */}
      <View className='mt-4 mb-4 gap-4'>
        <Button
          onPress={() => {
            router.push('/(app)/(tabs)/(dashboard)');
          }}
        >
          Login
        </Button>
      </View>
    </View>
  );
}
