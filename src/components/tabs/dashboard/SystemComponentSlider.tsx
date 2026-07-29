import { View, Text } from 'react-native';
import { Switch } from 'heroui-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function SystemComponentSlider() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View className='flex-row items-center gap-3'>
      <View className='h-10 w-10 items-center justify-center rounded-full bg-neutral-100'>
        <Ionicons name='notifications-outline' size={20} color='#9ca3af' />
      </View>

      <View className='flex-1 gap-0.5'>
        <Text className='text-xs text-neutral-500'>Shredding Machine</Text>
        <Text className='text-base font-bold'>Shredder</Text>
      </View>

      <Switch isSelected={isEnabled} onSelectedChange={setIsEnabled}>
        <Switch.Thumb />
      </Switch>
    </View>
  );
}
