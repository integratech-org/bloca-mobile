import { Button, Input, Label, TextField, Typography } from 'heroui-native';
import { View } from 'react-native';

export function EditAddressForm() {
  return (
    <View className='flex-1 gap-4'>
      <TextField>
        <Label>
          <Typography.Paragraph type='body-xs'>
            House no. and street
          </Typography.Paragraph>
        </Label>
        <Input
          placeholder='Enter house no. and street'
          className='rounded-2xl'
        />
      </TextField>

      <TextField>
        <Label>
          <Typography.Paragraph type='body-xs'>Barangay</Typography.Paragraph>
        </Label>
        <Input placeholder='Enter barangay' className='rounded-2xl' />
      </TextField>

      <TextField>
        <Label>
          <Typography.Paragraph type='body-xs'>
            City / Municipality
          </Typography.Paragraph>
        </Label>
        <Input
          placeholder='Enter city or municipality'
          className='rounded-2xl'
        />
      </TextField>

      <TextField>
        <Label>
          <Typography.Paragraph type='body-xs'>Province</Typography.Paragraph>
        </Label>
        <Input
          placeholder='Enter province (or Metro Manila)'
          className='rounded-2xl'
        />
      </TextField>

      <Button className='mt-auto rounded-2xl'>
        <Button.Label>Save address</Button.Label>
      </Button>
    </View>
  );
}
