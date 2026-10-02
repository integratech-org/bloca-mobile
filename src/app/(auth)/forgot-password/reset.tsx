import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import {
  Button,
  InputGroup,
  Label,
  TextField,
  Typography,
} from 'heroui-native';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ForgotPasswordResetScreen() {
  // TODO: forgot password reset screen
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className='flex-1'>
        {/* Title and Subheading*/}
        <View className='mb-6'>
          <Typography.Heading
            style={{
              fontFamily: 'Inter_700Bold',
              fontSize: 32,
            }}
            type='h1'
          >
            Set a new password
          </Typography.Heading>

          <Typography type='body'>
            Code verified. Choose a password you haven&apos;t used before.
          </Typography>
        </View>

        <View className='gap-4'>
          {/* New Password Input */}
          <TextField>
            <Label>
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}>
                New Password
              </Text>
            </Label>
            <InputGroup>
              <InputGroup.Prefix isDecorative>
                <MaterialDesignIcons name={'lock-outline'} size={18} />
              </InputGroup.Prefix>
              <InputGroup.Input placeholder='Enter New Password' />
            </InputGroup>
          </TextField>

          {/* Confirm Password Input */}
          <TextField>
            <Label>
              <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}>
                Confirm Password
              </Text>
            </Label>
            <InputGroup>
              <InputGroup.Prefix isDecorative>
                <MaterialDesignIcons name={'lock-outline'} size={18} />
              </InputGroup.Prefix>
              <InputGroup.Input placeholder='Confirm New Password' />
            </InputGroup>
          </TextField>
        </View>

        {/* Input Rules */}

        {/* Send Code Button */}
        <View className='mt-20'>
          <Button>
            <Button.Label
              style={{ fontFamily: 'Inter_600SemiBold', fontSize: 16 }}
            >
              Reset Password
            </Button.Label>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
