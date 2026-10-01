import { Screen } from '@/components/screen';
import { useLocalSearchParams } from 'expo-router';
import { Typography } from 'heroui-native';

export default function BatchDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <Typography.Heading>Batch Detail of {id}</Typography.Heading>
    </Screen>
  );
}
