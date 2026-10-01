import { Screen } from '@/components/screen';
import BatchLogItem from '@/features/history/components/batch-log-item';
import { mockBatchLogs } from '@/features/history/data/mock-batch-logs';
import { FlatList, View } from 'react-native';

export default function HistoryScreen() {
  return (
    <Screen>
      <FlatList
        data={mockBatchLogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BatchLogItem batch={item} />}
        ItemSeparatorComponent={() => <View className='h-2' />}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
