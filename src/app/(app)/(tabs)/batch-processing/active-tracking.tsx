import { Screen } from '@/components/screen';
import { Typography } from 'heroui-native';
import { ScrollView } from 'react-native';

export default function ActiveTrackingScreen() {
  return (
    <Screen>
      <ScrollView
        contentContainerClassName='p-4 gap-6'
        showsVerticalScrollIndicator={false}
      >
        <Typography.Paragraph>Active Tracking Screen</Typography.Paragraph>
      </ScrollView>
    </Screen>
  );
}
