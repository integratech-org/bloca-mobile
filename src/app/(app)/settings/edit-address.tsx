import { Screen } from '@/components/screen';
import { Button, Input, Label, TextField, Typography } from 'heroui-native';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  type TextInputProps,
  View,
} from 'react-native';

interface AddressFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  className?: string;
  keyboardType?: TextInputProps['keyboardType'];
  maxLength?: number;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  autoComplete?: TextInputProps['autoComplete'];
  textContentType?: TextInputProps['textContentType'];
}

function AddressField({
  label,
  placeholder,
  value,
  onChangeText,
  className,
  keyboardType,
  maxLength,
  autoCapitalize = 'words',
  autoComplete,
  textContentType,
}: AddressFieldProps) {
  return (
    <TextField className={className}>
      <Label>
        <Typography.Paragraph type='body-xs'>{label}</Typography.Paragraph>
      </Label>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        textContentType={textContentType}
        className='rounded-2xl'
      />
    </TextField>
  );
}

export default function EditAddressScreen() {
  const [street, setStreet] = useState('');
  const [barangay, setBarangay] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipCode, setZipCode] = useState('');

  return (
    <Screen edges={['left', 'right', 'bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className='flex-1'
      >
        <View className='flex-1 justify-between p-4'>
          {/* Form content */}
          <View className='gap-4'>
            {/* Description */}
            <Typography.Paragraph className='text-muted'>
              This is the only detail you can update yourself.
            </Typography.Paragraph>

            {/* Address fields */}
            <AddressField
              label='House no. and street'
              placeholder='House no., street'
              value={street}
              onChangeText={setStreet}
              autoComplete='street-address'
              textContentType='streetAddressLine1'
            />

            <AddressField
              label='Barangay'
              placeholder='Barangay'
              value={barangay}
              onChangeText={setBarangay}
            />

            <AddressField
              label='City / Municipality'
              placeholder='City or municipality'
              value={city}
              onChangeText={setCity}
              autoComplete='postal-address-locality'
              textContentType='addressCity'
            />

            {/* Province and ZIP code row */}
            <View className='flex-row gap-2'>
              <AddressField
                label='Province'
                placeholder='Province'
                value={province}
                onChangeText={setProvince}
                autoComplete='postal-address-region'
                textContentType='addressState'
                className='flex-[3]'
              />
              <AddressField
                label='ZIP code'
                placeholder='0000'
                value={zipCode}
                onChangeText={setZipCode}
                keyboardType='number-pad'
                maxLength={4}
                autoCapitalize='none'
                autoComplete='postal-code'
                textContentType='postalCode'
                className='flex-[2]'
              />
            </View>
          </View>

          {/* Bottom button */}
          <View className='pb-2'>
            <Button className='rounded-2xl' onPress={() => {}}>
              <Button.Label>Save address</Button.Label>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
