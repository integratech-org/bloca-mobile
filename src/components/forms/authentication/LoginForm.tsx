import { View, StyleSheet, Pressable, Text } from 'react-native';
import { InputGroup, TextField, Label, LinkButton } from 'heroui-native';
import { EnvelopeIcon } from 'react-native-heroicons/outline';
import { Link, router } from 'expo-router';

export default function LoginForm() {
  return (
    <View className='gap-2'>
      {/* Email Field */}
      <TextField isRequired>
        <Label>Email</Label>
        <InputGroup>
          <InputGroup.Prefix isDecorative>
            <EnvelopeIcon size={16} />
          </InputGroup.Prefix>
          <InputGroup.Input
            placeholder='you@example.com'
            keyboardType='email-address'
          />
        </InputGroup>
      </TextField>

      {/* Password Field */}
      <TextField isRequired>
        <Label>Password</Label>
        <InputGroup>
          <InputGroup.Prefix isDecorative>
            <EnvelopeIcon size={16} />
          </InputGroup.Prefix>
          <InputGroup.Input
            placeholder='Enter your password'
            keyboardType='default'
            secureTextEntry
          />
        </InputGroup>
      </TextField>
      <Link href='/(authentication)/forgotpassword' className='items-end'>
        <Text className='text-accent text-sm font-medium'>
          Forgot your password?
        </Text>
      </Link>
    </View>
  );
}
