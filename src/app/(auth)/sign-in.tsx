import { Screen } from '@/components/screen';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { Image } from 'expo-image';
import {
  Alert,
  Button,
  InputGroup,
  Label,
  LinkButton,
  TextField,
  Typography,
} from 'heroui-native';
import { ScrollView, Text, View } from 'react-native';

export default function SignInScreen() {
  return (
    <Screen edges={['top', 'left', 'right', 'bottom']}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className='flex-1 px-6 pt-8'>
          {/* Logo Screen */}
          <View className='mb-4 items-center'>
            <Image
              source={require('@/assets/splash/bloca-splash-icon.svg')}
              style={{ width: 80, height: 80, marginBottom: 16 }}
              contentFit='contain'
            />
            <Typography
              type='h1'
              style={{
                fontFamily: 'Inter_700Bold',
                fontSize: 48,
                color: '#C45A27',
              }}
            >
              BLOCA
            </Typography>
          </View>

          {/* Description */}
          <View className='mb-8 px-4'>
            <Typography.Paragraph className='text-center'>
              Sign in with the account your admin set up for you.
            </Typography.Paragraph>
          </View>

          <View className='gap-4'>
            {/* Email Field */}
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

            {/* Password */}
            <TextField>
              <Label>
                <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}>
                  Password
                </Text>
              </Label>
              <InputGroup>
                <InputGroup.Prefix isDecorative>
                  <MaterialDesignIcons name={'lock-outline'} size={18} />
                </InputGroup.Prefix>
                <InputGroup.Input placeholder='Enter Password' />
              </InputGroup>
            </TextField>
          </View>

          {/* Forgot Password Link */}
          <View className='mt-2 self-end'>
            <LinkButton>
              <LinkButton.Label>
                <Text
                  style={{
                    fontFamily: 'Inter_500Medium',
                    fontSize: 12,
                    color: '#C45A27',
                  }}
                >
                  Forgot Password
                </Text>
              </LinkButton.Label>
            </LinkButton>
          </View>

          {/* Login Button */}
          <View className='mt-4 mb-4 gap-4'>
            <Button> Login </Button>

            <Alert status='warning' className='bg-[#FFBC9D]/50'>
              <Alert.Indicator />
              <Alert.Content>
                <Text>
                  No self sign-up. New operator accounts are created by an Admin
                  or System Admin.
                </Text>
              </Alert.Content>
            </Alert>
          </View>
        </View>

        {/* <View>
        <Link href='/forgot-password' asChild>
          <Button>Forgot Password</Button>
        </Link>

        <Link href='/' asChild>
          <Button>Back</Button>
        </Link>
      </View> */}
      </ScrollView>
    </Screen>
  );
}
