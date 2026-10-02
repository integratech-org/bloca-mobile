import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Image } from 'expo-image';
import {
  Button,
  InputGroup,
  Label,
  TextField,
  Typography,
} from 'heroui-native';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ForgotPasswordScreen() {
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
            FORGOT PASSWORD{' '}
          </Typography.Heading>

          <Typography type='body'>
            Enter the email your admin registered. We&apos;ll send a code to
            verify verify it&apos;s you.{' '}
          </Typography>
        </View>

        {/* Email Input */}
        <TextField>
          <Label>
            <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}>
              Email
            </Text>
          </Label>
          <InputGroup>
            <InputGroup.Prefix isDecorative>
              <MaterialDesignIcons name={'email-outline'} size={18} />
            </InputGroup.Prefix>
            <InputGroup.Input placeholder='Enter Email' />
          </InputGroup>
        </TextField>

        {/* Illustration Placehoder  */}
        <View className='items-center justify-center'>
          <Image
            source={require('@/assets/images/authentication-illustration.svg')}
            style={{ width: 220, height: 220 }}
            contentFit='contain'
          />
        </View>

        {/* Send Code Button */}
        <View>
          <Button>
            <Button.Label
              style={{ fontFamily: 'Inter_600SemiBold', fontSize: 16 }}
            >
              Send Code
            </Button.Label>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
