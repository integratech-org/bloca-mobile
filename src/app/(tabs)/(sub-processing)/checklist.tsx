import SystemComponentSlider from '@/components/tabs/dashboard/SystemComponentSlider';
import ChecklistLabels from '@/components/tabs/sub-processing/checklist/ChecklistLabels';
import { Button, InputGroup, Label, TextField } from 'heroui-native';
import { View, Text } from 'react-native';
import { router } from 'expo-router';

export default function ChecklistScreen() {
  return (
    <View className='flex-1 bg-white px-4'>
      <View>
        <TextField>
          <Label className='bg-white'>Text Inputs </Label>
          <InputGroup className='rounded-2xl border border-gray-300'>
            <InputGroup.Prefix isDecorative>
              {/* icon here */}
            </InputGroup.Prefix>
            <InputGroup.Input
              placeholder='you@example.com'
              keyboardType='email-address'
            />
          </InputGroup>
        </TextField>
      </View>

      {/* Sliders */}
      <View className='py-4'>
        <SystemComponentSlider />
      </View>

      {/* Checklist */}
      <View className='gap-4'>
        <Text> Checklist </Text>
        <ChecklistLabels />
      </View>

      <View className='py-4'>
        <Button
          onPress={() => {
            router.push('/(tabs)/(sub-processing)/activetracking');
          }}
        >
          {' '}
          Start Batch
        </Button>
      </View>
    </View>
  );
}
