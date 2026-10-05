import { Screen } from '@/components/screen';
import { AuthHeader } from '@/features/auth/components/auth-header';
import StyledMaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import {
  Button,
  InputGroup,
  Label,
  TextField,
  Typography,
} from 'heroui-native';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ForgotPasswordScreen() {
  return (
    <Screen>
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        <AuthHeader />
        <View className='flex-1 p-4'>
          {/* Title and Subheading*/}
          <View className='mb-6'>
            <Typography.Heading>Forgot Password</Typography.Heading>

            <Typography.Paragraph>
              Enter the email your admin registered. We&apos;ll send a code to
              verify verify it&apos;s you.
            </Typography.Paragraph>
          </View>

          {/* Email Input */}
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

          {/* Illustration Placehoder  */}
          <View className='items-center justify-center'>
            <Image
              source={require('@/features/auth/assets/holding-phone-illustration.svg')}
              style={{ width: 220, height: 220 }}
              contentFit='contain'
            />
          </View>

          {/* Send Code Button */}
          <View>
            <Button onPress={() => router.push('/forgot-password/verify')}>
              Send Code
            </Button>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
