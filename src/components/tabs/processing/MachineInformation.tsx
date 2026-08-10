import { Card } from 'heroui-native';
import { View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MachineInformation() {
  return (
    <Card className='shadow-2xl'>
      <Card.Header>
        <Card.Title>
          <View className='flex-row items-center justify-center'>
            <Ionicons
              name='information-circle-outline'
              size={20}
              color='black'
            />
            <Text className='justify-center text-lg font-bold'>
              Machine Information
            </Text>
          </View>
        </Card.Title>
      </Card.Header>
      <Card.Body className='gap-4'>
        <Text>Machine ID: 12345ss</Text>
        <Text>Status: Running</Text>
        <Text>Temperature: 75°C</Text>
        <Text>Pressure: 2.5 bar</Text>
      </Card.Body>
    </Card>
  );
}
